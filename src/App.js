import "./App.css";
import { useState , createContext} from "react";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contact";
import { Items } from "./pages/Items";
import { Profile } from "./pages/Profile";
import { NAVBAR } from "./components/NAVBAR";

export const AppContext = createContext()
function App() {
  
  const [usernames , setUsername] = useState("Viswak")
  return (
    <AppContext.Provider value = {{usernames , setUsername}}>
    <div className="App">
      <Router>
        <div><NAVBAR /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contacts/>} />
          <Route path="/Items" element={<Items/>} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
    </AppContext.Provider>
  );
}

export default App;