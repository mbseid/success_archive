import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';

// @mui
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from './components/Page';
import AppWidgetSummary from './dashboard/AppWidgetSummary';
import { Links } from '/imports/api/links';
import { People } from '/imports/api/people';

export const Index = () => {
  const navigate = useNavigate()

  const linkCount = useTracker(() => Links.find().count(),[]);
  const peopleCount = useTracker(() => People.find().count(),[]);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Link Count" total={linkCount} icon={'ant-design:link-outlined'} onClick={() => navigate('/links')}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="People" total={peopleCount} color="info" icon={'ant-design:user-outlined'} onClick={() => navigate('/people')}/>
          </Grid>
          {/*
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
          */}
        </Grid>
      </Container>
    </Page>
  );
};
