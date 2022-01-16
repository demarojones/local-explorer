import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from '@mui/icons-material';
import { Rating } from "@mui/material";

import useMapStyles from "./mapStyles";

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

const Map = () => {
    const classes = useMapStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = {lat: 0, lng: 0}
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact bootstrapURLKeys={{key: API_KEY}} 
                defaultCenter={coordinates} 
                center={coordinates} 
                defaultZoom={14} 
                margin={[50,50,50,50]}
                options={''}
                onChange={()=> ''}
                onChildClick={()=> ''}>

            </GoogleMapReact>
        </div>
    )
}

export default Map;
