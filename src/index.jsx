//
import React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";

const rootContainer = document.getElementById("root");

// create root :-
const root = ReactDOM.createRoot(rootContainer);

// render an element to the root :-
root.render(<App />);
