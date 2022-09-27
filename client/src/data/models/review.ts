import { Sentiment } from '../enums/CurrentState';

export type Review = {
  content: string;
  googleRating: number;
  sentimentScore: Sentiment | null;
};
