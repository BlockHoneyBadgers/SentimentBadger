import { Sentiment } from '../enums/CurrentState';
import { Source } from '../enums/Source';

export type Review = {
  content: string;
  rating: number;
  sentimentScore: Sentiment | null;
  source: Source;
};
