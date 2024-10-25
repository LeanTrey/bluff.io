// Entry point for the build script in your package.json
import React from "react";
import ReactDOM from "react-dom/client";

// Import your React component
import HelloWorld from "./components/HelloWorld";

// Render the React component in a DOM element
document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<HelloWorld greeting="Hello from React" />);
});
