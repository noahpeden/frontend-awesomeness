import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function MovieCard({ poster, title, type, year, imdbID }) {
  return (
    <Grid item xs={2.5}>
      <Card sx={{ maxWidth: 345 }}>
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
    </Grid>
  );
}
