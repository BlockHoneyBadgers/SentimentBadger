/* eslint-disable no-await-in-loop */
import SerpApi from 'google-search-results-nodejs';

import { GoogleBusiness } from '../../types/GoogleBusiness';
import { GoogleReview } from '../../types/GoogleReview';
import { GetGoogleReviewsResponse } from './responses/GetGoogleReviewsResponse';

const MAX_PAGES = 100;
const GOOGLE_SEARCH_ENGINE = 'google_maps_reviews';

export const getGoogleReviews = async (
  googleDataId: string,
): Promise<GetGoogleReviewsResponse> => {
  const { SERP_API_KEY } = process.env;

  const search = new SerpApi.GoogleSearch(SERP_API_KEY);
  const baseParams = {
    engine: GOOGLE_SEARCH_ENGINE,
    data_id: googleDataId,
  };

  let nextPageToken: string | null = null;

  let fetchedBusiness: GoogleBusiness | null = null;
  const fetchedReviews: GoogleReview[] = [];

  for (let i = MAX_PAGES; i >= 0; i -= 1) {
    const fetchReviewsPage = (pageToken: string | null): any => {
      const requestParams = {
        ...baseParams,
        next_page_token: pageToken || undefined,
      };

      return new Promise((resolve, reject) => {
        try {
          search.json(requestParams, (data: any) => {
            resolve(data);
          });
        } catch (e) {
          reject(e);
        }
      });
    };

    const fetchedPage = await fetchReviewsPage(nextPageToken);

    if (fetchedPage.error) {
      throw new Error('Business details not found');
    }

    nextPageToken = fetchedPage.serpapi_pagination.next_page_token;

    if (!fetchedBusiness && fetchedPage.place_info) {
      fetchedBusiness = {
        dataId: googleDataId,
        name: fetchedPage.place_info.title,
        rating: fetchedPage.place_info.rating,
        address: fetchedPage.place_info.address,
      };
    }

    if (fetchedPage.reviews) {
      fetchedPage.reviews.forEach((review: any) => {
        const processedContent = review.snippet
          ? review.snippet.replace(review.summary, '').trim()
          : null;
        fetchedReviews.push({
          content: processedContent || null,
          rating: review.rating,
        });
      });
    }

    if (!nextPageToken) {
      break;
    }
  }

  return {
    business: fetchedBusiness,
    reviews: fetchedReviews,
  };
};
