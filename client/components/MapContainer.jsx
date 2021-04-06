import React, { useState , useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
const config = require('../../config.js');

const locations = [
  {
    name: "Location 1",
    location: {
      lat: 47.844151,
      lng: -122.220109
    },
  },
  {
    name: "Location 2",
    location: {
      lat: 47.69806,
      lng: -122.32703
    },
  },
  {
    name: "Location 3",
    location: {
      lat: 47.6572148,
      lng: -122.385458
    },
  },
  {
    name: "Location 4",
    location: {
      lat: 47.7245292663574,
      lng: -122.294776916504
    },
  },
  {
    name: "Location 5",
    location: {
      lat: 47.53109815129322,
      lng: -122.32351290165549
    },
  }
];

const MapContainer = ({searchResult}) => {

  const [ selected, setSelected ] = useState({});

  const [ currentPosition, setCurrentPosition ] = useState({});

  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const pos = {
      lat: latitude,
      lng: longitude,
    }
    setCurrentPosition(pos);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  },[])

  const onSelect = item => {
    setSelected(item);
  }

  const mapStyles = {
    height: "500px",
    width: "60%"};

  const defaultCenter = {
    lat: 47.6062, lng: -122.3321
  }


  return (
     <LoadScript
       googleMapsApiKey={config.GOOGLE_TOKEN}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={currentPosition.lat ? currentPosition : defaultCenter}>
          {
            searchResult.map(item => {
              return (
              <Marker key={item.name} position={{lat:item.coordinates.latitude, lng:item.coordinates.longitude}} onClick={()=>onSelect(item)}
              />
              )
            })
          }
          {
            selected.coordinates ? {lat:selected.coordinates.latitude, lng:selected.coordinates.longitude}&&
            (
              <InfoWindow
              position={{lat:selected.coordinates.latitude, lng:selected.coordinates.longitude}}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <div>
                <p>{selected.name}</p>
                <img src={selected.image_url} height="200" width="200"></img>
              </div>
            </InfoWindow>
            )
          : null}
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;