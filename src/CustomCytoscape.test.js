import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { CustomCytoscape } from "./CustomCytoscape";

describe("CustomCytoscape", () => {
  const elements = [];
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CustomCytoscape elements={elements} headless={true} />,
      div
    );
  });

  it("matches snapshot", () => {
    const component = renderer.create(
      <CustomCytoscape elements={elements} headless={true} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
