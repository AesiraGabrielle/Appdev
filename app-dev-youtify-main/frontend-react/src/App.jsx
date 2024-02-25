import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./sections/Register"
import Login from "./sections/Login";
import Home from "./sections/Home";
import Admin from "./sections/Admin";

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/admin" element={<Admin />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App