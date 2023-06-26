import React,{useState} from 'react';
import { Fragment } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";


const markers = [
  {
    id: 1,
    name: "Qobustan",
    position: { lat: 40.0709493, lng: 49.3694411 },
  },
  {
    id: 2,
    name: "Sumqayit",
    position: { lat: 40.5788843, lng: 49.5485073 },
  },
];



const MapContainer = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCRxUkBGzWkpW5ZwH5bWzKdgM07wN08M5c",
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };


  return (
    <Fragment>
      <div className="">
        <div style={{ height: "auto", width: "100%" }}>
          {(isLoaded && props.markers.length > 0) ? (
            <GoogleMap
              center={{ lat: props.markers[0].position.lat, lng: props.markers[0].position.lng }}
              zoom={10}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "90vh" }}
            >
              {props.markers.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  // icon={{
                  //   url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
                  //   scaledSize: { width: 50, height: 50 }
                  // }}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default MapContainer;

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCRxUkBGzWkpW5ZwH5bWzKdgM07wN08M5c',
// })(MapContainer);