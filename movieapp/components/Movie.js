import TextRating from './TextRating';
import { Card, CardContent, Typography, Grid } from '@mui/material';

export function Movie({ movies }) {
  const imgUrl = 'https://image.tmdb.org/t/p/original/';
  return movies.map(movie => (
    <Grid item xs={2.2} key={movie.id}>
      <Card
        sx={{
          backgroundImage: `url(${imgUrl + movie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '440px',
          position: 'relative',
        }}
      >
        <CardContent sx={{ position: 'absolute', bottom: '0' }}>
          <Typography component="h6" color="#0FEFFD">
            {movie.original_title.split(' ')[0]}
          </Typography>
          <TextRating value={movie.vote_average / 2} />
          <Typography
            component="h2"
            color="common.white"
            sx={{ fontSize: '24px' }}
          >
            {movie.original_title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
}
