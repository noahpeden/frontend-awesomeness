import { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { MovieContext } from '../../contexts/MovieContext';
import { List, ListItem, CardMedia } from '@mui/material';

export default function ResponsiveDialog() {
  const {
    dialogOpen,
    setDialogOpen,
    movieData: {
      Title,
      Year,
      Rated,
      Released,
      Runtime,
      Genre,
      Director,
      Writer,
      Actors,
      Plot,
      Language,
      Country,
      Poster,
    } = {},
  } = useContext(MovieContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{Title}</DialogTitle>
      <DialogContent>
        <List>
          <ListItem>Year: {Year}</ListItem>
          <ListItem>Rated: {Rated}</ListItem>
          <ListItem>Released: {Released}</ListItem>
          <ListItem>Runtime: {Runtime}</ListItem>
          <ListItem>Genre: {Genre}</ListItem>
          <ListItem>Director: {Director}</ListItem>
          <ListItem>Writer: {Writer}</ListItem>
          <ListItem>Actors: {Actors}</ListItem>
          <ListItem>Plot: {Plot}</ListItem>
          <ListItem>Language: {Language}</ListItem>
          <ListItem>Country: {Country}</ListItem>
          <CardMedia component="img" height="140" image={Poster} alt="movie poster" />
        </List>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setDialogOpen(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
