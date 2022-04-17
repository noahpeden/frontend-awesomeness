import { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { MovieContext } from '../../contexts/MovieContext';
import { List, ListItem, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
  const fullScreen = useMediaQuery(theme.breakpoints.down('600px'));

  return (
    <Dialog
      data-testid="MovieDialog-test"
      fullScreen={fullScreen}
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
    >
      <DialogTitle
        id="responsive-dialog-title"
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        {Title}
        <IconButton onClick={() => setDialogOpen(false)} data-testid="close-dialog-test">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
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
          <img
            sx={{ maxWidth: '50%', maxHeight: 'calc(100vh - 64px)' }}
            component="img"
            src={Poster}
            alt="movie poster"
          />
        </List>
      </DialogContent>
    </Dialog>
  );
}
