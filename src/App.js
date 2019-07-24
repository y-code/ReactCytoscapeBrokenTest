import React from "react";
import { CustomCytoscape } from "./CustomCytoscape";
import { CustomCytoscapeBroken } from "./CustomCytoscapeBroken";

const elements = [
  { data: { id: "1" }, position: { x: 0, y: 0 } },
  { data: { id: "2" }, position: { x: 100, y: 0 } },
  { data: { source: "1", target: "2" } }
];

function App() {
  return (
    <React.Fragment>
      <CustomCytoscape elements={elements} />
      <CustomCytoscapeBroken elements={elements} />;
    </React.Fragment>
  );
}

export default App;
