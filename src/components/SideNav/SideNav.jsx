import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, useMediaQuery } from '@mui/material';

const drawerWidth = 240;

const DrawerContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',

        paddingTop: '40px',
        justifyContent: 'flex-start',
        backgroundColor: '#0068bf',
        height: '100vh',
      }}
    >
      <List sx={{ width: '100%' }}>
        {['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5', 'Menu 6', 'Menu 7'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} sx={{ color: 'white' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar according to documentation
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  backgroundColor: '#0068bf',
}));

export default function SideNav() {
  const isMobile = useMediaQuery('(max-width:600px)');

  const { mobileOpen, setMobileOpen } = useContext(MovieContext);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Grid item xs={3}>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile according to docs
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {isMobile && (
            <DrawerHeader>
              <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
                <CloseIcon color="white" />
              </IconButton>
            </DrawerHeader>
          )}
          <DrawerContent />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {isMobile && (
            <DrawerHeader>
              <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
                <CloseIcon />
              </IconButton>
            </DrawerHeader>
          )}
          <DrawerContent />
        </Drawer>
      </Box>
    </Grid>
  );
}
