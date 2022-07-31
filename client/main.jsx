import React from 'react';
import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

Meteor.startup(() => {

  ReactDOM.render(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>,
    document.getElementById("react-target")
  );
  // render(<App/>, document.getElementById('react-target'));
});
