import Home from "./components/home"
import Amt from "./components/amenties";
import Photos from "./components/photo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
      <div style={{padding:"0px"}}>
      <Home></Home>
      <br></br>
      <br></br>
      <Amt></Amt>
      <br></br>
      <br></br>
      <Photos></Photos>
      </div>
  );
}

export default App;
