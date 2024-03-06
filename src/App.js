import "./App.css";
import { useState , useEffect } from "react";
import Axios from "axios";

function App() {
  const [data , setData] = useState("")


  // fetch("https://excuser-three.vercel.app/v1/excuse/")
  // .then((res) => res.json())
  // .then((datas) => setData(datas[0].category)) 
const fact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
    setData(res.data.fact)})
}
useEffect(()=>{fact()},[]);

  return (
    <div className="App">
      <button onClick={fact}>display fact</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;