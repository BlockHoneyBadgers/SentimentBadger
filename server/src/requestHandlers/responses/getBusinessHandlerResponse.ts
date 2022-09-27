import { SentimentType } from '../../enums/SentimentType';

export type GetBusinessHandlerResponse = {
  googleDataId: string;
  googleRatingAvg: number;
  name: string;
  reviews: {
    content: string | null;
    googleRating: number;
    sentimentScore: SentimentType | null;
  }[];
};
