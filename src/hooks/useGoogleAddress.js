import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = address => {
  const [map, setMap] = useState({ lat:0, lng:0 });
  const API = 
  `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC9Fc4OwaLrNOSajXft5w-4H28_totpvlM`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
}

export default useGoogleAddress;