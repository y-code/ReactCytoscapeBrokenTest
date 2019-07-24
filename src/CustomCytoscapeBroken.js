import React, { useRef } from "react";
import Cytoscape from "react-cytoscapejs";

export function CustomCytoscapeBroken({ headless, elements }) {
  const layout = { name: "preset" };

  const cyRef = useRef();

  return (
    <Cytoscape
      layout={layout}
      cy={cy => {
        cyRef.current = cy;
      }}
      elements={elements}
      style={{ height: "300px", width: "300px" }}
    />
  );
}
