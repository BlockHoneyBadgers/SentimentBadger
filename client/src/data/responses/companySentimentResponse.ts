import { Review } from '../models/review';

export type CompanySentimentResponse = {
  googleDataId: string;
  googleRatingAvg: number;
  name: string;
  reviews: Review[];
  yelpRatingAvg: number;
};
