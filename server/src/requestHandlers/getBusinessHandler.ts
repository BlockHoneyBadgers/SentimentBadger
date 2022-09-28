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

  const responseReviews: Review[] = [];

  const reviewsWithContent = googleReviews.reviews.filter(
    (item) => item.content !== null,
  );

  const sentiments = await getBatchTextSentiment(
    reviewsWithContent.map((item) => item.content),
  );

  responseReviews.push(
    ...reviewsWithContent.map((googleBusinessReview, index) => ({
      content: googleBusinessReview.content,
      rating: googleBusinessReview.rating,
      source: RatingSource.GOOGLE,

      sentimentScore: sentiments[index] as SentimentType,
    })),
  );

  const reviewsWithoutContent = googleReviews.reviews.filter(
    (item) => item.content === null,
  );

  responseReviews.push(
    ...reviewsWithoutContent.map((googleBusinessReview) => ({
      content: googleBusinessReview.content,
      rating: googleBusinessReview.rating,
      source: RatingSource.GOOGLE,
      sentimentScore: null,
    })),
  );

  const response: GetBusinessHandlerResponse = {
    googleRatingAvg: googleReviews.business.rating,
    yelpRatingAvg: yelpPlace.place.rating,
    name: googleReviews.business.name,
    reviews: responseReviews,
  };

  res.json(response);
};
