import { useContext } from 'react';
import { IconButton, Toolbar, Typography } from '@mui/material';
import { MovieContext } from '../../contexts/MovieContext';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

export default function Header() {
  const { mobileOpen, setMobileOpen } = useContext(MovieContext);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" textAlign="center">
          Movie Search
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
