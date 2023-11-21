import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import Batalha from './components/Batalha';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/batalha0",
    element: <Batalha tipo={0} />,
  },

  {
    path: "/batalha1",
    element: <Batalha tipo={1} />,
  },

  {
    path: "/batalha2",
    element: <Batalha tipo={2} />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
