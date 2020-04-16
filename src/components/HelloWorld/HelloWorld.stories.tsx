import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Hello World",
  decorators: [withKnobs],
};

export const HelloWorldStory: React.FC<{}> = () => {
  const name = text("Name", "REACT");

  return (
    <h1>Hello {name}</h1>
  );
};
