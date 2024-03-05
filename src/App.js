import "./App.css";
import { useState , useEffect } from "react";
//import axios from ("axios");

function App() {
  const [data , setData] = useState(null)

  fetch("https://excuser-three.vercel.app/v1/excuse/")
  .then((res) => res.json())
  .then((data) => {setData(data[1])
  console.log(data.category)})

  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default App;