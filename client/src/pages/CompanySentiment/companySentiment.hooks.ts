import { useCompanySentimentQuery } from 'pages/CompanySentiment/companySentimentApi.slice';

export const useCompanySentiment = () => {
  const { data, isLoading } = useCompanySentimentQuery({
    googleDataId: '0x89c25ab8812bdd5b:0x9e8e59a7e6e4c6d4',
  });

  return {
    googleDataId: data?.googleDataId || '',
    googleRatingAvg: data?.googleRatingAvg || null,
    name: data?.name || '',
    reviews: data?.reviews || [],
    isLoading,
  };
};
