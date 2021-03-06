import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const mapStyles = {
  height: "50vh",
  width: "100%"
};

const defaultCenter = {
  lat: 43.785663062587105, lng: -79.43435624397236
}

const Map = (props) => {
  const [selected, setSelected] = useState({});
  const onSelect = item => {
    setSelected(item);
  }


  const { locations, babySitters } = props


  const locationArr = babySitters.filter((babySitter) => {
    if(babySitter.status === "Verified") {
      return babySitter
    }
  }).map((babySitter, index) => {

    const locationBabysitter = locations.find((location) => {

      return location.babysitter_id === babySitter.id
    })

  
    if (locationBabysitter) {
      return {
         ...babySitter,
        location: {
          lat: locationBabysitter.lat,
          lng: locationBabysitter.lng
        }
      }
    }

    return {}
  })

  const place = [
      {
        name: "Babysitter 1",
        location: { 
          lat: 43.77510632345708, 
          lng: -79.44736634716638
        },
      },
      {
        name: "Babysitter 2",
        location: { 
          lat: 43.76642919663482, 
          lng: -79.42127381772258
        },
      },
      {
        name: "Babysitter 3",
        location: { 
          lat: 43.789135045529704, 
          lng: -79.41835079686906
        },
      },
      {
        name: "Babysitter 4",
        location: { 
          lat: 43.77994017660731, 
          lng: -79.41578065362916
        },
      },
      {
        name: "Babysitter 5",
        location: { 
            "lat": 43.7751063234571,
            "lng": -79.4473663471664
        },
      }
    ];

    console.log({selected})

  return (

<Grid padding={14}>
    <LoadScript
      googleMapsApiKey='AIzaSyDutQF2kdYj4SC4efZscY_CamfDi24axB8'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}>
        {
          locationArr.map(item => {
            
            return (
              <Marker key={item.first_name} 
                position={item.location}
                // title={item.first_name}
                onClick={() => onSelect(item)}
              >
                {/* <InfoWindow position={item.location} >
                  <span>
                    <b>Text</b>

                  </span>
                </InfoWindow> */}

              </Marker>


            )
          })
        }
        {
          selected.location &&
          (
            <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <Typography variant="h6" style={{"color": "black"}}>
              <div iv style={{height: "15vh", width: "100%"}}>
              <Avatar
        alt="Remy Sharp"
        src={selected.babysitter_image}
        sx={{ width: 130, height: 130 }}
      />
                {selected.first_name}
                
              
              </div>
             </Typography>
            </InfoWindow>
            
          )
        }
      </GoogleMap>
    </LoadScript>
    </Grid>
  )
}
export default Map;