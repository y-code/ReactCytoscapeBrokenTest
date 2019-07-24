// CustomCytoscape.test.js
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { CustomCytoscapeBroken } from "./CustomCytoscapeBroken";

describe("CustomCytoscape", () => {
  const elements = [];
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomCytoscapeBroken elements={elements} />, div);
  });

  it("matches snapshot", () => {
    const component = renderer.create(
      <CustomCytoscapeBroken elements={elements} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
