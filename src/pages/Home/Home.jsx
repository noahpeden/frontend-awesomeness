import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import SideNav from '../../components/SideNav';

const Item = () => (
  <Grid item xs={3}>
    <Paper elevation={3}>Hello</Paper>
  </Grid>
);

export default function Home() {
  return (
    <Grid container direction={'row'}>
      <Grid item xs={2}>
        <SideNav />
      </Grid>
      <Grid container item xs={8} spacing={5} sx={{ padding: '16px' }}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>
    </Grid>
  );
}
