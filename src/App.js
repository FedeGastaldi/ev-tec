
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const fetchData = async (year) => {
  const response = await axios.get(`https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/${year}?apikey=e9d5ff946dbdaa1e372cfc5d31476f795046b990&formato=json`);
  console.log(response.data);
}

function App() {
  const [year, setYear] = useState([]);
  const [submitValue, setSubmitValue] = useState("Buscar");

  
      
      useEffect(() => {
        const obtenerAño = async () => {
          const data = await fetchData(year);
          setYear(data);
        }
        
      
        obtenerAño();
      }, [year]);

    

  
      
      
  return (
    
    <div className="App">
      <h1>Consulta de la UF a la CMF</h1>
      <h3>Ingrese un año para ver un reporte de UF</h3>
      <form  >
        <input type="text" placeholder='Ingresa un año' value={year} onChange={(event) => setYear(event.target.value)} />
        <input type="submit" id='boton' value={submitValue}  onClick={() =>   setSubmitValue(setYear) }  />
      </form>
      
      
      
    </div>
  );
}

export default App;
