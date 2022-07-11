import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Create from "./components/Create";
import "./styles/App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={Home}></Route>
          <Route path="/create" element={Create}></Route>
          <Route path="/profile" element={Profile}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
