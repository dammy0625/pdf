import './App.css';
import Home from "./components/home"
import First from "./components/First"
import { BrowserRouter as Router , Route } from "react-router-dom"



function App() {
  
  return (
    
      <Router> 
  
        <Route  path="/" exact >
        <First></First>
        </Route>
      
        <Route  path="/home"  >
        <Home></Home>
        </Route>
      
      </Router>
      
  );
}

export default App;
