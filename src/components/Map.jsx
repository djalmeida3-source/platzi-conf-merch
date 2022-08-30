import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: data.lat, lng: data.lng
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC9Fc4OwaLrNOSajXft5w-4H28_totpvlM"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(15)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyles}
      center={defaultCenter}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  ) : <></>
}

export default Map;