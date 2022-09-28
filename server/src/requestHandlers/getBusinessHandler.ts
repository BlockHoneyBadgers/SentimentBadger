import { Request, Response } from 'express';

import {
  GetBusinessHandlerResponse,
  Review,
} from './responses/getBusinessHandlerResponse';
import { getGoogleReviews } from '../actions/google/getGoogleReviews';
import { GetGoogleReviewsResponse } from '../actions/google/responses/GetGoogleReviewsResponse';
import { getBatchTextSentiment } from '../actions/aws-comprehend/getBatchTextSentiment';
import { SentimentType } from '../enums/SentimentType';
import { RatingSource } from '../enums/RatingSource';
import { GetYelpPlaceResponse } from '../actions/yelp/responses/GetYelpPlaceResponse';
import { getYelpPlace } from '../actions/yelp/getYelpPlace';
import { GetYelpReviewsResponse } from '../actions/yelp/responses/GetYelpReviewsResponse';
import { getYelpReviews } from '../actions/yelp/getYelpReviews';
import { getKeyWords } from '../actions/aws-comprehend/getKeyWords';

export const getBusinessHandler = async (req: Request, res: Response) => {
  const { SERP_API_KEY } = process.env;

  if (!SERP_API_KEY) {
    res.status(503).send();
    return;
  }

  let googleReviews: GetGoogleReviewsResponse;
  try {
    googleReviews = await getGoogleReviews(req.params.googleId);
  } catch {
    res.status(404).json({ message: 'Business details not found' });
    return;
  }

  let yelpPlace: GetYelpPlaceResponse;
  try {
    yelpPlace = await getYelpPlace(req.params.yelpId);
  } catch {
    res.status(404).json({ message: 'Business details not found' });
    return;
  }

  let yelpReviews: GetYelpReviewsResponse;
  try {
    yelpReviews = await getYelpReviews(req.params.yelpId);
  } catch (e) {
    res.status(404).json({ message: 'Business details not found' });
    return;
  }

  const processedGoogleReviews = async () => {
    const proessedGoogleReviews: Review[] = [];

    const googleReviewsWithContent = googleReviews.reviews.filter(
      (item) => item.content !== null,
    );

    const sentiments = await getBatchTextSentiment(
      googleReviewsWithContent.map((item) => item.content),
    );

    proessedGoogleReviews.push(
      ...googleReviewsWithContent.map((googleBusinessReview, index) => ({
        content: googleBusinessReview.content,
        rating: googleBusinessReview.rating,
        source: RatingSource.GOOGLE,

        sentimentScore: sentiments[index] as SentimentType,
      })),
    );

    const googleReviewsWithoutContent = googleReviews.reviews.filter(
      (item) => item.content === null,
    );

    proessedGoogleReviews.push(
      ...googleReviewsWithoutContent.map((googleBusinessReview) => ({
        content: googleBusinessReview.content,
        rating: googleBusinessReview.rating,
        source: RatingSource.GOOGLE,
        sentimentScore: null,
      })),
    );

    return proessedGoogleReviews;
  };

  const processedYelpReviews = async () => {
    const proessedYelpReviews: Review[] = [];

    const originalYelpReviews = yelpReviews.reviews;

    const sentiments = await getBatchTextSentiment(
      originalYelpReviews.map((item) => item.content),
    );

    proessedYelpReviews.push(
      ...originalYelpReviews.map((yelpReview, index) => ({
        content: yelpReview.content,
        rating: yelpReview.rating,
        source: RatingSource.YELP,

        sentimentScore: sentiments[index] as SentimentType,
      })),
    );

    return proessedYelpReviews;
  };

  const responseReviews = [
    ...(await processedGoogleReviews()),
    ...(await processedYelpReviews()),
  ];

  const keyWords = await getKeyWords(
    responseReviews.map((item) => item.content),
  );

  const response: GetBusinessHandlerResponse = {
    googleRatingAvg: googleReviews.business.rating,
    yelpRatingAvg: yelpPlace.place.rating,
    name: googleReviews.business.name,
    address: googleReviews.business.address,
    reviews: responseReviews,
    keyWords,
  };

  res.json(response);
};
