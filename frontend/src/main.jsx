// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import {RouterProvider} from 'react-router-dom'
// import {router} from './routes/router'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <RouterProvider router={router} />
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={routes} />
 
);