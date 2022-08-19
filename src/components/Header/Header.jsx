import { useContext, useState } from "react";
import {
  Button,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { MovieContext } from "../../contexts/MovieContext";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import useMovieApi from "../../hooks/useMovieApi";

const drawerWidth = 240;

export default function Header() {
  const { mobileOpen, setMobileOpen, setMovieData, setDialogOpen } =
    useContext(MovieContext);
  const { fetchData } = useMovieApi();
  const [search, setSearch] = useState("");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const fetchSearched = async () => {
    const response = await fetchData({ param: "t", search });
    console.log(response);
    if (response) {
      if (response.Error) {
        setMovieData({ error: response.Error });
        setSearch("");
        return setDialogOpen(true);
      }
      setMovieData(response);
      setDialogOpen(true);
    }
    setSearch("");
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `$23px` },
        backgroundColor: "#2195f2",
      }}
      data-testid="header-test"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          data-testid="drawer-open-button-test"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" textAlign="center">
          Movie Search
        </Typography>
        <TextField
          variant="standard"
          sx={{
            ml: 3,
            input: {
              color: "white",
            },
          }}
          color="success"
          placeholder="search for a movie"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button variant="contained" sx={{ ml: 3 }} onClick={fetchSearched}>
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
}
