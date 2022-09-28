/* eslint-disable no-await-in-loop */
import SerpApi from 'google-search-results-nodejs';

import { YelpReview } from '../../types/YelpReview';
import { GetYelpReviewsResponse } from './responses/GetYelpReviewsResponse';

const MAX_PAGES = 100;
const COMMENT_PER_PAGE = 10;
const YELP_SEARCH_ENGINE = 'yelp_reviews';

export const getYelpReviews = async (
  yelpId: string,
): Promise<GetYelpReviewsResponse> => {
  const { SERP_API_KEY } = process.env;

  const search = new SerpApi.GoogleSearch(SERP_API_KEY);

  const baseParams = {
    engine: YELP_SEARCH_ENGINE,
    place_id: yelpId,
  };

  const fetchedReviews: YelpReview[] = [];

  for (let i = 0; i < MAX_PAGES; i += 1) {
    const pageStart = i * COMMENT_PER_PAGE;

    const fetchReviewsPage = (): any => {
      const requestParams = {
        ...baseParams,
        start: pageStart,
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

    const fetchedPage = await fetchReviewsPage();

    if (fetchedPage.error) {
      throw new Error('Business details not found');
    }

    if (fetchedPage.reviews) {
      fetchedPage.reviews.forEach((review: any) => {
        fetchedReviews.push({
          content: review.comment.text,
          rating: review.rating,
        });
      });
    }

    const commentsTotalCount = fetchedPage.search_information.total_results;
    const nextPageStart = pageStart + COMMENT_PER_PAGE;

    if (nextPageStart >= commentsTotalCount) {
      break;
    }
  }

  return {
    reviews: fetchedReviews,
  };
};
