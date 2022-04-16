import { IconButton, Menu, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Header() {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#2195f2' }}>
      <div position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" color={'white'}>
            Movie Search
          </Typography>
        </Toolbar>
      </div>
    </Box>
  );
}
