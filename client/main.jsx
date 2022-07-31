import React from 'react';
import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

Meteor.startup(() => {

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("react-target")
  );
  // render(<App/>, document.getElementById('react-target'));
});
