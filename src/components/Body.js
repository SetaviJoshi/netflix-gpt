import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Brouse from './Brouse'

const Body = () => {
    const appRouter = createBrowserRouter ([
        {
            path : "/",
            element: <Login/>
        },
        {
            path : "/browse",
            element: <Brouse/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};  

export default Body;