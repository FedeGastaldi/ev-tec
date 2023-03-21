import React from 'react';
import axios from 'axios';

const obtenerAño = () => {
  return (
     fetchData = async (year) => {
        const response = await axios.get(`https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/year=${year}apikey=e9d5ff946dbdaa1e372cfc5d31476f795046b990&formato=json`);
        return response.data;
      }
      
     
      
      
     
  )
  
}

export default obtenerAño