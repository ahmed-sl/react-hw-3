import "./App.css";
import { useState } from "react";
import Input from "./components/Input";


const App=()=> {
  const [country,setCountry] = useState('')
  const [temperature,setTemperature] = useState('')
  const [wind,setWind] = useState('')
  const [description,setDescription] = useState('')
  


  const onClick= async()=>{
    try {
      const requst = await fetch('https://goweather.herokuapp.com/weather/' + country)

      const data = await requst.json();
      console.log(data);
      setDescription(data.description)
      setTemperature(data.temperature)
      setWind(data.wind)
      console.log(temperature);
      console.log(description);
      console.log(wind);
    } catch (error) {
      console.log("some error in fetch data");
    }
  }
  const onChange = (e)=>{
    setCountry(e.target.value)
  }
  return (
    <div className="container">
      <h1 className="text-center">Wether App</h1>
      <Input value={country} onChange={onChange} onClick={onClick}/>
      <div className="data mt-3">
        <div className="text-center">
          <h5>Temperature</h5>
          <h5>{temperature}</h5>
        </div>
        <div className="text-center">
          <h5>Wind</h5>
          <h5>{wind}</h5>
        </div>
        <div className="text-center">
          <h5>Description</h5>
          <h5>{description}</h5>
        </div>
      </div>
    </div>
  );
};

export default App;
