import { GoogleBusiness } from '../../../types/GoogleBusiness';
import { GoogleReview } from '../../../types/GoogleReview';

export type GetGoogleReviewsResponse = {
  business: GoogleBusiness;
  reviews: GoogleReview[];
};
