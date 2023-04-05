import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home/Home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ConnectMe from './Components/ConnectMe/ConnectMe';
import MiniProjects from './Components/MiniProjects/MiniProjects';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
    
  }, 
  {
    path: "/",
    element: <Home/>,
    
  },
  {
    path: "/about",
    element: <About/>,
    
  },
  {
    path: "/contact",
    element: <Contact/>,
    
  },
  {
    path: "/linkedln-therohanmehta",
    element: <ConnectMe/>,
    
  },
  {
    path: "/mini-projects",
    element: <MiniProjects/>,
    
  },
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
