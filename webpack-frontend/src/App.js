import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "./components/NavBar/index";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}
export default App;
