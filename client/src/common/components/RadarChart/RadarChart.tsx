import { ResponsiveRadar } from '@nivo/radar';

import { Wrapper } from './radarChart.styles';
import { Review } from '../../../data/models/review';
import { Sentiment } from '../../../data/enums/CurrentState';

type Props = {
  reviews: Review[];
};

// {
//   taste: 'POSITIVE',
//       amount: 107,
// },

export const RadarChart = ({ reviews }: Props) => {
  const rateGroups = reviews.reduce(
    (acc, review) => {
      if (!review.sentimentScore) return acc;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      acc[`${review.sentimentScore}`]++;

      return acc;
    },
    {
      [Sentiment.MIXED]: 0,
      [Sentiment.NEGATIVE]: 0,
      [Sentiment.NEUTRAL]: 0,
      [Sentiment.POSITIVE]: 0,
    },
  );

  const data = Object.keys(rateGroups).map((key) => ({
    rate: key,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    amount: rateGroups[key],
  }));

  return (
    <Wrapper>
      <ResponsiveRadar
        data={data}
        keys={['amount']}
        indexBy="rate"
        margin={{ top: 50, right: 20, bottom: 50, left: 20 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
      />
    </Wrapper>
  );
};
