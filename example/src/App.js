import React, { Component } from "react";

import InfoBox from "manager-ui";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <InfoBox text="Modern React component module" />
        </div>
      </ThemeProvider>
    );
  }
}
