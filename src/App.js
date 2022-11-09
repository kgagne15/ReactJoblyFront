import './App.css';
import WebRoutes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WebRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
