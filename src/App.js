import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import PlaceList from "./components/PlaceList";
import Map from "./components/Map";

function App() {
  const defaultTheme = createTheme();
  return (
    <>
      
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <PlaceList />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
