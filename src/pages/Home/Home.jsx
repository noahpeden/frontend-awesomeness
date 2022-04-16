import { CircularProgress, Grid, Typography } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import SideNav from '../../components/SideNav';
import useMovieApi from '../../hooks/useMovieApi';

export default function Home() {
  const { data, error, loading } = useMovieApi();
  console.log(data, error, loading);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    <Typography variant="h1" color="red">
      there has been an error: {error}{' '}
    </Typography>;
  }
  if (data.Search) {
    return (
      <Grid container direction={'row'}>
        <Grid item xs={2}>
          <SideNav />
        </Grid>
        <Grid container xs={10} spacing={5} sx={{ padding: '16px' }}>
          {data.Search.map((movie) => {
            return (
              <MovieCard
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
