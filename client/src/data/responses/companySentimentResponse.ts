import { Review } from '../models/review';

export type CompanySentimentResponse = {
  address: string;
  googleDataId: string;
  googleRatingAvg: number;
  name: string;
  reviews: Review[];
  yelpRatingAvg: number;
};
