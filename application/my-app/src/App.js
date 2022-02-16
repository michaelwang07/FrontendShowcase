// import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import home from './componets/Home'


function App() {
  return (
   home()
  );
}
  
export default App;