import { List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

export default function SideNav() {
  return (
    <Box
      sx={{
        display: 'flex',

        paddingTop: 1,
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
}
