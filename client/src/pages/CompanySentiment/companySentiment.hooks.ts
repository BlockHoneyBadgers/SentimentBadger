import { useCompanySentimentQuery } from 'pages/CompanySentiment/companySentimentApi.slice';

export const useCompanySentiment = () => {
  const { data, isLoading } = useCompanySentimentQuery({ googleDataId: '123' });

  return {
    googleDataId: data?.googleDataId || '',
    googleRatingAvg: data?.googleRatingAvg || null,
    name: data?.name || '',
    reviews: data?.reviews || [],
    isLoading,
  };
};
