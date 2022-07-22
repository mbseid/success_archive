import React from 'react';
import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from '/imports/ui/App';
import { Links } from '../imports/ui/links';
import { NewLink } from '../imports/ui/links/new';
import { LinkList } from '../imports/ui/links/list';

Meteor.startup(() => {

  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="links" element={<Links />}>
            <Route path="new" element={<NewLink />} />
            <Route
              index
              element={<LinkList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>,
    document.getElementById("react-target")
  );
  // render(<App/>, document.getElementById('react-target'));
});
