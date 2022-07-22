import React from 'react';
import { Outlet } from "react-router-dom";


export const App = () => {
  return (
    <div>
      <h1>Be Success</h1>
      <hr />
      <Outlet />
    </div>
  );
};
