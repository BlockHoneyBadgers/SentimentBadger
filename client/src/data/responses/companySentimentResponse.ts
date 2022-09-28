import { Review } from '../models/review';
import { Keyword } from '../models/keyword';

export type CompanySentimentResponse = {
  address: string;
  googleDataId: string;
  googleRatingAvg: number;
  keywords: Keyword[];
  name: string;
  reviews: Review[];
  yelpRatingAvg: number;
};
