import { Typography } from '@mui/material';

import { Wrapper } from 'pages/CompanySentiment/components/EmptySearchState/emptyState.styles';

export const EmptySearchState = () => (
  <Wrapper data-testid="empty-search-state">
    <Typography variant="subtitle1">No data</Typography>
  </Wrapper>
);
