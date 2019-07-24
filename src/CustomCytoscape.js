import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import Cytoscape from "react-cytoscapejs";

export function CustomCytoscape({ headless, elements }) {
  const layout = { name: "preset" };

  const cyRef = useRef();

  // Use cytoscape (non-react) if headless === true
  useEffect(() => {
    if (headless) {
      cyRef.current = cytoscape({
        container: document.getElementById("cyHeadless"),
        layout,
        elements
      });
    }
  }, [headless, elements, layout]);

  return headless ? (
    <div id="cyHeadless" />
  ) : (
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
