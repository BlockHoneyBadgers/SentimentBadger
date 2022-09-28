import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { useCompanySentiment } from 'pages/CompanySentiment/companySentiment.hooks';

import { EmptySearchState } from './components/EmptySearchState/EmptySearchState';
import { BarChart } from '../../common/components/BarChart/BarChart';
import { RadarChart } from '../../common/components/RadarChart/RadarChart';
import { Source } from '../../data/enums/Source';

export const CompanySentiment = () => {
  const { isLoading, name, googleRatingAvg, reviews, yelpRatingAvg } =
    useCompanySentiment();

  if (!!isLoading) return <CircularProgress />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h2">
          Contractor vetting dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card variant="outlined" style={{ minHeight: '210px' }}>
          <CardHeader title="Contractor Name" />
          <CardContent>
            <Typography variant="h4">{name}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={2}>
        <Card variant="outlined" style={{ minHeight: '210px' }}>
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
      <Grid item xs={12} md={2}>
        <Card variant="outlined" style={{ minHeight: '210px' }}>
          <CardHeader title="Yelp Rating" />
          <CardContent>
            {yelpRatingAvg ? (
              <>
                <Typography variant="h4">{yelpRatingAvg}</Typography>
                <Rating name="read-only" value={yelpRatingAvg} readOnly />
              </>
            ) : (
              <EmptySearchState />
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card variant="outlined">
          <CardHeader title="Google ratings distribution" />
          <CardContent>
            <BarChart source={Source.GOOGLE} reviews={reviews} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card variant="outlined">
          <CardHeader title="Yelp ratings distribution" />
          <CardContent>
            <BarChart source={Source.YELP} reviews={reviews} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card variant="outlined">
          <CardHeader title="Reviews sentiment chart" />
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
                    <TableCell>Rating</TableCell>
                    <TableCell>Sentiment Score</TableCell>
                    <TableCell>Source</TableCell>
                    <TableCell>Content</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reviews.map(
                    ({ content, sentimentScore, rating, source }, index) =>
                      content ? (
                        <TableRow
                          key={index}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Rating name="read-only" value={rating} readOnly />
                          </TableCell>
                          <TableCell>
                            <Typography>{sentimentScore}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>{source}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>{content}</Typography>
                          </TableCell>
                        </TableRow>
                      ) : null,
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
