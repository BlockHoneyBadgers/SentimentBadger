import { useLocation } from 'react-router-dom';

import React from 'react';

import { useCompanySentimentQuery } from 'pages/CompanySentiment/companySentimentApi.slice';

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export const useCompanySentiment = () => {
  const query = useQuery();

  const googleId =
    query.get('googleId') || '0x89c25bfb206097cb:0x3b4acbe9958aff5a';
  const yelpId = query.get('yelpId') || 'uVViEXfGrA9CO9Tc3ku6eQ';

  const { data, isLoading } = useCompanySentimentQuery({
    googleId,
    yelpId,
  });

  return {
    address: data?.address || '',
    googleDataId: data?.googleDataId || '',
    googleRatingAvg: data?.googleRatingAvg || null,
    yelpRatingAvg: data?.yelpRatingAvg || null,
    name: data?.name || '',
    reviews: data?.reviews || [],
    keywords: !!data?.keywords.length
      ? data?.keywords.map(({ text, count }) => ({ value: text, count }))
      : [],
    isLoading,
  };
};
