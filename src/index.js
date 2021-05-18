import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";
import App from "./App";
import { MyQueryClient } from "./components/ReactQuery";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={MyQueryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
