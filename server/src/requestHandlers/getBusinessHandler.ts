import { Request, Response } from 'express';

import {
  GetBusinessHandlerResponse,
  Review,
} from './responses/getBusinessHandlerResponse';
import { getBusinessReviews } from '../actions/google/getBusinessReviews';
import { GetBusinessReviewsResponse } from '../actions/google/responses/GetBusinessReviewsResponse';
import { getBatchTextSentiment } from '../actions/aws-comprehend/getBatchTextSentiment';
import { SentimentType } from '../enums/SentimentType';

export const getBusinessHandler = async (req: Request, res: Response) => {
  const { SERP_API_KEY } = process.env;

  if (!SERP_API_KEY) {
    res.status(503).send();
    return;
  }

  let googleBusinessReviews: GetBusinessReviewsResponse;
  try {
    googleBusinessReviews = await getBusinessReviews(req.params.id);
  } catch {
    res.status(404).json({ message: 'Business details not found' });
    return;
  }

  const responseReviews: Review[] = [];

  const reviewsWithContent = googleBusinessReviews.reviews.filter(
    (item) => item.content !== null,
  );

  const sentiments = await getBatchTextSentiment(
    reviewsWithContent.map((item) => item.content),
  );

  responseReviews.push(
    ...reviewsWithContent.map((googleBusinessReview, index) => ({
      content: googleBusinessReview.content,
      googleRating: googleBusinessReview.rating,
      sentimentScore: sentiments[index] as SentimentType,
    })),
  );

  const reviewsWithoutContent = googleBusinessReviews.reviews.filter(
    (item) => item.content === null,
  );

  responseReviews.push(
    ...reviewsWithoutContent.map((googleBusinessReview) => ({
      content: googleBusinessReview.content,
      googleRating: googleBusinessReview.rating,
      sentimentScore: null,
    })),
  );

  const response: GetBusinessHandlerResponse = {
    googleDataId: googleBusinessReviews.business.dataId,
    googleRatingAvg: googleBusinessReviews.business.rating,
    name: googleBusinessReviews.business.name,
    reviews: responseReviews,
  };

  res.json(response);
};
