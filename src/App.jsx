import { useState } from "react";
import { useEffect } from "react"
//import WeatherD from "./components/WeatherD";
import axios from "axios";
import WeatherBox from "./components/WeatherBox";


function App() {
  const [weather, setWeather] = useState(null)
  console.log(weather)
  const success = (pos) => {
    const { coords: {latitude, longitude} } = pos;
      
    //AXIOS
  axios
  .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d63d2600c60293e8d48ef69631be5978`)
  .then(({data}) => setWeather (data))
  .catch((err) => console.log(err) ) 
  }
  
  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(success)
  }, [])

return (
    <main className="flex justify-center items-center text-center h-screen bg-[url(https://www.landuum.com/wp-content/uploads/2019/03/cultura_paisajeiluminado_landuum5.jpg)] bg-cover">
      { weather ? <WeatherBox wProp = { weather } /> : <span className="bg-white/50 p-9">Cargando...</span>}
      
      {/* <WeatherD weather={weather} /> */}
    </main>
  )
}

export default App


//INSTALAR AXIOS