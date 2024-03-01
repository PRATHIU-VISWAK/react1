import "./App.css";
import { useState } from "react";

function App() {
  const [inputval , changeval] = useState("")
const handleInput=(event)=>{
  changeval( event.target.value)
}

  return (
    <div className="App">
     <input type="text" onChange={handleInput}/>
     {inputval}
    </div>
  );
}

export default App;