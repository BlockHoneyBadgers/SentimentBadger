import { SentimentType } from '../../enums/SentimentType';

export type Review = {
  content: string | null;
  googleRating: number;
  sentimentScore: SentimentType | null;
};

export type GetBusinessHandlerResponse = {
  googleDataId: string;
  googleRatingAvg: number;
  name: string;
  reviews: Review[];
};
