import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CompanySentimentRequest } from 'data/requests/companySentimentRequest';

import { CompanySentimentResponse } from '../../data/responses/companySentimentResponse';

export const companySentimentApi = createApi({
  reducerPath: 'companySentimentApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    companySentiment: builder.query<
      CompanySentimentResponse,
      CompanySentimentRequest
    >({
      query: ({ googleId, yelpId }) =>
        `${process.env.REACT_APP_API_PATH}/business/${googleId}/${yelpId}`,
    }),
  }),
});

export const { useCompanySentimentQuery } = companySentimentApi;
