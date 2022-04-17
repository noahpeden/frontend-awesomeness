import { useContext } from 'react';
import axios from 'axios';
import { MovieContext } from '../../contexts/MovieContext';
import MovieDialog from '../MovieDialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, useMediaQuery } from '@mui/material';

export default function MovieCard({ poster, title, type, year, imdbID }) {
  const { setMovieData, setDialogOpen } = useContext(MovieContext);
  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`
      );
      setMovieData(response.data);
      setDialogOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Grid item xs={isMobile ? 12 : 4}>
      <CardActionArea>
        <Card sx={{ maxWidth: 500, height: '275px' }} onClick={fetchMovie}>
          <CardMedia component="img" height="140" image={poster} alt="movie poster" />
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
