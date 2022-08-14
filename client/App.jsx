import React from 'react';
import ThemeProvider from '/imports/ui/theme';
import { Routes, Route } from "react-router-dom";
import { Index } from '/imports/ui/Index';
import { Links } from '../imports/ui/links';
import { NewLink } from '../imports/ui/links/new';
import { EditLink } from '../imports/ui/links/edit';
import { LinkList } from '../imports/ui/links/list';
import PeopleList from '../imports/ui/people/list';
import DashboardLayout from "/imports/ui/layouts/dashboard/index"
import NewPerson from '../imports/ui/people/new';
import ViewPerson from '../imports/ui/people/view';
import { ProjectList } from '/imports/ui/projects/list';
import { NewProject } from '/imports/ui/projects/new';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function App() {

  // <BaseOptionChartStyle />
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="links" element={<Links />}>
              <Route path="new" element={<NewLink />} />
              <Route path=":id/edit" element={<EditLink />} />
              <Route
                index
                element={<LinkList />} />
            </Route>
            <Route path="people">
              <Route path="new" element={<NewPerson />} />
              <Route path=":id" element={<ViewPerson />} />
              <Route index element={<PeopleList />} />
            </Route>
            <Route path="projects">
              <Route path="new" element={<NewProject />} />
              <Route index element={<ProjectList />} />
            </Route>
            <Route
                index
                element={<Index />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
