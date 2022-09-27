import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Typography,
  Rating,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

import { useCompanySentiment } from 'pages/CompanySentiment/companySentiment.hooks';

import { EmptySearchState } from './components/EmptySearchState/EmptySearchState';
import { BarChart } from '../../common/components/BarChart/BarChart';
import { RadarChart } from '../../common/components/RadarChart/RadarChart';

export const CompanySentiment = () => {
  const { isLoading, name, googleRatingAvg, reviews } = useCompanySentiment();

  if (!!isLoading) return <CircularProgress />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h2">
          Contractor vetting dashboard
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardHeader title="Contractor Name" />
          <CardContent>
            <Typography variant="h4">{name}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={2}>
        <Card variant="outlined">
          <CardHeader title="Google Rating" />
          <CardContent>
            {googleRatingAvg ? (
              <>
                <Typography variant="h4">{googleRatingAvg}</Typography>
                <Rating name="read-only" value={googleRatingAvg} readOnly />
              </>
            ) : (
              <EmptySearchState />
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={5}>
        <Card variant="outlined">
          <CardHeader title="Number of stars given for the contractor" />
          <CardContent>
            <BarChart reviews={reviews} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={5}>
        <Card variant="outlined">
          <CardHeader title="Reviews sentyment chart" />
          <CardContent>
            <RadarChart reviews={reviews} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardHeader title="Reviews" />
          <CardContent>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Google Rating</TableCell>
                    <TableCell align="right">Sentiment Score</TableCell>
                    <TableCell align="right">Content</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reviews.map(
                    ({ content, sentimentScore, googleRating }, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Rating
                            name="read-only"
                            value={googleRating}
                            readOnly
                          />
                        </TableCell>
                        <TableCell>
                          <Typography>{sentimentScore}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{content}</Typography>
                        </TableCell>
                      </TableRow>
                    ),
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
