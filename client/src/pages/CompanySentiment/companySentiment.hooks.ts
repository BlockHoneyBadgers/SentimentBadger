import { useCompanySentimentQuery } from 'pages/CompanySentiment/companySentimentApi.slice';

export const useCompanySentiment = () => {
  const { data, isLoading } = useCompanySentimentQuery({
    googleId: '0x89c25bfb206097cb:0x3b4acbe9958aff5a',
    yelpId: 'uVViEXfGrA9CO9Tc3ku6eQ',
  });

  return {
    googleDataId: data?.googleDataId || '',
    googleRatingAvg: data?.googleRatingAvg || null,
    yelpRatingAvg: data?.yelpRatingAvg || null,
    name: data?.name || '',
    reviews: data?.reviews || [],
    isLoading,
  };
};
