import { Grid } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import SideNav from '../../components/SideNav';
import useMovieApi from '../../hooks/useMovieApi';

export default function Home() {
  const { data, error, loading } = useMovieApi();
  console.log(data, error, loading);
  return (
    <Grid container direction={'row'}>
      <Grid item xs={2}>
        <SideNav />
      </Grid>
      <Grid container xs={10} spacing={5} sx={{ padding: '16px' }}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Grid>
    </Grid>
  );
}
