import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 43.71524289323266, long: -79.35833041608609
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDutQF2kdYj4SC4efZscY_CamfDi24axB8'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default Map;