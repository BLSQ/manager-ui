import React from "react";
import theme from "../../theme";
import { ExpandableBottomSheet } from "../../index";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import { muiTheme } from "storybook-addon-material-ui";

const stories = storiesOf("Expandable bottom sheet", ExpandableBottomSheet);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .addDecorator(muiTheme([theme]));

// Knobs for React props
stories.add("Default", () => (
  <ExpandableBottomSheet open={boolean("Open", true)}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta deserunt
    nam molestiae tempore quia, adipisci similique esse ipsam cupiditate qui,
    illo, consequatur minus totam natus placeat ducimus iste laudantium eaque!
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta deserunt
    nam molestiae tempore quia, adipisci similique esse ipsam cupiditate qui,
    illo, consequatur minus totam natus placeat ducimus iste laudantium eaque!
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta deserunt
    nam molestiae tempore quia, adipisci similique esse ipsam cupiditate qui,
    illo, consequatur minus totam natus placeat ducimus iste laudantium eaque!
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta deserunt
    nam molestiae tempore quia, adipisci similique esse ipsam cupiditate qui,
    illo, consequatur minus totam natus placeat ducimus iste laudantium eaque!
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta deserunt
    nam molestiae tempore quia, adipisci similique esse ipsam cupiditate qui,
    illo, consequatur minus totam natus placeat ducimus iste laudantium eaque!
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta deserunt
    nam molestiae tempore quia, adipisci similique esse ipsam cupiditate qui,
    illo, consequatur minus totam natus placeat ducimus iste laudantium eaque!
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta deserunt
    nam molestiae tempore quia, adipisci similique esse ipsam cupiditate qui,
    illo, consequatur minus totam natus placeat ducimus iste laudantium eaque!
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta deserunt
    nam molestiae tempore quia, adipisci similique esse ipsam cupiditate qui,
    illo, consequatur minus totam natus placeat ducimus iste laudantium eaque!
  </ExpandableBottomSheet>
));
