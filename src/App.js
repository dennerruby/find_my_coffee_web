import React, { Fragment, useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const App = () =>{
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const {  REACT_APP_GOOGLE_API_KEY } = process.env;

  useEffect(() =>{
    setCurrentLocaction()
  },[]);
  

async function setCurrentLocaction(){
  await navigator.geolocation.getCurrentPosition(function(position){
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);

  },function(error){
    alert("Habilite a localização para usar esse APP")
  });
}


  return (
    <Fragment>
        <LoadScript googleMapsApiKey={ REACT_APP_GOOGLE_API_KEY }>
          <GoogleMap mapContainerStyle={{height: "100vh", width: "100%"}}
            zoom={15}
            center={{ lat: latitude, lng: longitude }}>
            </GoogleMap>
        </LoadScript>
    </Fragment>
)
}
export default App;
 