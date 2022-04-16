import { CircularProgress, Grid, Typography, Box } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import SideNav from '../../components/SideNav';
import useMovieApi from '../../hooks/useMovieApi';

export default function Home() {
  const { data, error, loading } = useMovieApi();

  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    <Box sx={{ display: 'flex' }}>
      <Typography variant="h1" color="red">
        there has been an error: {error}{' '}
      </Typography>
    </Box>;
  }
  if (data.Search) {
    return (
      <Grid container>
        <Grid item xs={2}>
          <SideNav />
        </Grid>
        <Grid
          container
          xs={10}
          item
          spacing={3}
          sx={{ padding: '16px', display: 'flex', justifyContent: 'center' }}
        >
          {data.Search.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                type={movie.Type}
                year={movie.Year}
                imdbID={movie.imdbID}
              />
            );
          })}
        </Grid>
      </Grid>
    );
  }
}
