import { Route, Router, Routes } from "react-router-dom";
import './App.css';
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";
import View from "./View";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          
      
      <Route path ="/register" element = {<Register/>}/>
      <Route path ="/login" element = {<Login/>}/>
      <Route path="/view" element={<View />} />
  
    </Routes>
    </div>
  );
}

export default App;
