import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Movie } from '../components/Movie';

export function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  }, []);

  return (
    <Container maxWidth="xl" sx={{ margin: '20px 0' }}>
      <Grid container spacing={'16px'} sx={{ justifyContent: 'center' }}>
        <Movie movies={movies} />
      </Grid>
    </Container>
  );
}
