import { RatingSource } from '../../enums/RatingSource';
import { SentimentType } from '../../enums/SentimentType';

export type Review = {
  content: string | null;
  rating: number;
  sentimentScore: SentimentType | null;
  source: RatingSource;
};

export type KeyWord = {
  text: string;
  count: number;
};

export type GetBusinessHandlerResponse = {
  googleRatingAvg: number;
  yelpRatingAvg: number;
  name: string;
  address: string;
  reviews: Review[];
  keyWords: KeyWord[];
};
