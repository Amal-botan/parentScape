import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState} from "react";

const mapStyles = {        
  height: "50vh",
  width: "50%"};

  const defaultCenter = {
    lat: 43.785663062587105, lng: -79.43435624397236
  }

const Map = () => {
  const [ selected, setSelected ] = useState({});
  const onSelect = item => {
    setSelected(item);
  }

  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 43.77510632345708, 
        lng: -79.44736634716638
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 43.76642919663482, 
        lng: -79.42127381772258
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 43.789135045529704, 
        lng: -79.41835079686906
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 43.77994017660731, 
        lng: -79.41578065362916
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 43.80397969069323,
        lng: -79.44805299267806
      },
    }
  ];
 
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDutQF2kdYj4SC4efZscY_CamfDi24axB8'>
       <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
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
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
     </GoogleMap>
     </LoadScript>
  )
}
export default Map;