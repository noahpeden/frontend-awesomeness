import { CircularProgress, Grid, Typography, Box } from '@mui/material';
import { useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import SideNav from '../../components/SideNav';
import useMovieApi from '../../hooks/useMovieApi';

export default function Home() {
  const { data, error, loading, fetchData } = useMovieApi();
  useEffect(() => {
    fetchData({ search: 'super', param: 's' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  if (data?.Search) {
    return (
      <Box sx={{ display: 'flex', mt: '75px' }}>
        <Box component="nav" sx={{ width: { sm: '240px' }, flexShrink: { sm: 0 } }}>
          <SideNav />
        </Box>
        <Box
          component="main"
          sx={{
            p: 3,
            width: { sm: `calc(100% - 240px)` },
          }}
        >
          <Grid container spacing={{ xs: 2, md: 3 }}>
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
        </Box>
      </Box>
    );
  }
}
