import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;