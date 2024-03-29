import React from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';

// @mui
import { Grid, Container, Typography, Card, List, ListItem, ListItemText, ListItemSecondaryAction, CardActionArea, styled } from '@mui/material';
// components
import Page from './components/Page';
import AppWidgetSummary from './dashboard/AppWidgetSummary';
import Iconify from '/imports/ui/components/Iconify';

import { Links } from '/imports/api/links';
import { People } from '/imports/api/people';
import { Projects } from '/imports/api/projects';

import { colorCode as projectColorCode } from './projects/utils/colors';



const UnstyledLink = styled(Link)((theme) => {
  return {
    color: 'inherit',
    textDecoration: 'inherit'
  }
})
export const Index = () => {
  const navigate = useNavigate()

  const {linkCount, peopleCount, projects } = useTracker(() => {
    return {
      linkCount: Links.find().count(),
      peopleCount: People.find().count(),
      projects: Projects.find({complete: false}).fetch()
    }
  }, []);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
        ⛰ Climb Your Mountain ⛰
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Link Count" total={linkCount} icon={'ant-design:link-outlined'} onClick={() => navigate('/links')}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="People" total={peopleCount} color="info" icon={'ant-design:user-outlined'} onClick={() => navigate('/people')}/>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{
              height: '100%'
            }}>
              <UnstyledLink to="/projects">
                <Typography variant="h5" gutterBottom
                            sx={{
                              py: 1,
                              textAlign: 'center'
                            }}>
                  <Iconify icon={'mdi:engine'} /> Projects
                </Typography>
              </UnstyledLink>
              <List>
                {projects.map((project) => (
                  <ListItem key={project._id}
                            sx={{
                              backgroundColor: projectColorCode(project)
                            }}>
                    <UnstyledLink to={`/projects/${project._id}`}>
                      <ListItemText
                        primary={project.name}
                        secondary={project.due.toDateString()} />
                      <ListItemSecondaryAction>
                          <Iconify icon={'mdi:arrow-right-circle-outline'} />
                      </ListItemSecondaryAction>
                    </UnstyledLink>
                  </ListItem>
                ))}
              </List>
            </Card>
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
