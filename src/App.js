import "./App.css";

import Weathers from "./components/Weathers";

import {useState,useEffect} from 'react'



function App() {
const [hour,setHour] = useState('')


  const getDate = ()=>{
    let date = new Date();
   let hours = date.getHours()

   setHour(hours)

   
  }
  console.log(hour)

  useEffect(()=>{
    getDate()
  },[])

  
  
  return (
    <div className={`App ${hour<18 && hour>6 ? 'morning':'night'}`}>
      
      <Weathers/>
      
    </div>
  );
}

export default App;
