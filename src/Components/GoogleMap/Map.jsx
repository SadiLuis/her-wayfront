import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Papper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlineIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from './styles'

const Map = ({ setCoordinates, setBounds, coordinates }) => {

  const classes = useStyles();
  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB6A5sRCY60lwXdp5txFqBNx-_mBOWcAu0'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={15}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={(e) => {
            setCoordinates({lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
          }}
          onChildClick={''}
      >
      </GoogleMapReact>
    </div>
  )
}

export default Map