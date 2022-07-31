import React from 'react';
import ThemeProvider from '/imports/ui/theme';
import { Routes, Route } from "react-router-dom";
import { Index } from '/imports/ui/Index';
import { Links } from '../imports/ui/links';
import { NewLink } from '../imports/ui/links/new';
import { LinkList } from '../imports/ui/links/list';
import DashboardLayout from "/imports/ui/layouts/dashboard/index"

export default function App() {

  // <BaseOptionChartStyle />
  return (

    <ThemeProvider>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="links" element={<Links />}>
            <Route path="new" element={<NewLink />} />
            <Route
              index
              element={<LinkList />} />
          </Route>
          <Route
              index
              element={<Index />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
