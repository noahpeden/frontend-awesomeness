import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import MovieDialog from '../MovieDialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, useMediaQuery } from '@mui/material';
import useMovieApi from '../../hooks/useMovieApi';

export default function MovieCard({ poster, title, year, imdbID }) {
  const { setMovieData, setDialogOpen } = useContext(MovieContext);
  const { fetchData } = useMovieApi();
  const fetchMovie = async () => {
    const data = await fetchData({ param: 'i', search: imdbID });
    if (data) {
      setMovieData(data);
      setDialogOpen(true);
    }
  };

  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Grid item xs={isMobile ? 12 : 4}>
      <CardActionArea>
        <Card
          data-testid="MovieCard-test"
          sx={{ maxWidth: 500, height: '275px' }}
          onClick={fetchMovie}
        >
          <CardMedia component="img" height="140" image={poster} alt={`${title} poster`} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Year: {year}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      <MovieDialog />
    </Grid>
  );
}
