import { ResponsiveBar } from '@nivo/bar';

import { Wrapper } from './barChart.styles';
import { Review } from '../../../data/models/review';

type Props = {
  reviews: Review[];
};

export const BarChart = ({ reviews }: Props) => {
  const rateGroups = reviews.reduce(
    (acc, review) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      acc[`${review.googleRating}`]++;

      return acc;
    },
    { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 },
  );

  const data = Object.keys(rateGroups).map((key) => ({
    rate: key,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    '# of reviews': rateGroups[key],
  }));

  return (
    <Wrapper>
      <ResponsiveBar
        keys={['# of reviews']}
        indexBy="rate"
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 30 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'paired' }}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
      />
    </Wrapper>
  );
};