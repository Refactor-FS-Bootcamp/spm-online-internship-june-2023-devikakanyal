import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionsContext.jsx";
import "./index.css";



ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
);