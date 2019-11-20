import React from "react";
import theme from "../../theme";
import { ThemeProvider } from "@material-ui/styles";
import { InfoBox } from "../../index";

export default { title: "Info box" };

export const info = () => (
  <ThemeProvider theme={theme}>
    <InfoBox name="demo-example">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam
      sequi tenetur! Sit odio error repellat atque voluptas cum quibusdam
      facilis, inventore quod odit eligendi deleniti modi ducimus assumenda
      magnam?
    </InfoBox>
  </ThemeProvider>
);
