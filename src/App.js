import "./App.css";
import { DISHES } from "./shared/dishes";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} />; */}
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
