/* eslint-disable no-await-in-loop */
import yelp from 'yelp-fusion';

import { GetYelpPlaceResponse } from './responses/GetYelpPlaceResponse';

export const getYelpPlace = async (
  yelpId: string,
): Promise<GetYelpPlaceResponse> => {
  const { YELP_API_KEY } = process.env;

  const client = yelp.client(YELP_API_KEY);
  const response = await client.business(yelpId);

  return {
    place: {
      id: yelpId,
      name: response.jsonBody.name,
      rating: response.jsonBody.rating,
    },
  };
};
