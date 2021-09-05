import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";

import Navbar from "./components/ui/Navbar";
import Home from "./pages/home/home";

import "./App.css";
import ProductsForm from "./pages/products/ProductsForm";

function App() {

  return (
    <Router>
        <Navbar/>
        <Switch >
          <Route exact path="/" component={Home}/>
          <Route exact path="/products/new" component={ProductsForm}/>
        </Switch>
    </Router>
  );
}

export default App;
