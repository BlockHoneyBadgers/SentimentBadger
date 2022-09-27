import { GoogleBusiness } from '../../../types/GoogleBusiness';
import { GoogleBusinessReview } from '../../../types/GoogleBusinessReview';

export type GetBusinessReviewsResponse = {
  business: GoogleBusiness;
  reviews: GoogleBusinessReview[];
};
