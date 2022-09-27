import { Request, Response } from 'express';

import { GetBusinessHandlerResponse } from './responses/getBusinessHandlerResponse';
import { getBusinessReviews } from '../actions/google/getBusinessReviews';
import { GetBusinessReviewsResponse } from '../actions/google/responses/GetBusinessReviewsResponse';

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

  const responseReviews = googleBusinessReviews.reviews.map(
    (googleBusinessReview) => ({
      content: googleBusinessReview.content,
      googleRating: googleBusinessReview.rating,
      sentimentScore: null, // TODO
    }),
  );

  const response: GetBusinessHandlerResponse = {
    googleDataId: googleBusinessReviews.business.dataId,
    googleRatingAvg: googleBusinessReviews.business.rating,
    name: googleBusinessReviews.business.name,
    reviews: responseReviews,
  };

  res.json(response);
};
