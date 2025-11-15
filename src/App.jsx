import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
