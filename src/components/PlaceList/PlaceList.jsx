import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import PlaceDetail from "../PlaceDetail";

const StyledListContainer = styled("div")(({ theme }) => ({
  padding: "25px",
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 140,
  marginBottom: "30px",
}));
const PlaceList = () => {
  const [category, setCategory] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [places, setPlaces] = useState([
    { name: "Cool Pub" },
    { name: "Hot Pub" },
    { name: "Best Bar" }
]);

  return (
    <StyledListContainer>
      <Typography variant="h4">Interesting places around you</Typography>
      <StyledFormControl>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </StyledFormControl>
      <StyledFormControl>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </StyledFormControl>
      <Grid container sx={{ overflow: 'auto'}}>
          {
              places?.map((place, i) => (
                <Grid item key={i} xs={12}>
                    <PlaceDetail place={place} />
                </Grid>
              ))
          }
      </Grid>
    </StyledListContainer>
  );
};

export default PlaceList;
