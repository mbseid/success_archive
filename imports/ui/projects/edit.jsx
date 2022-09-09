import React, { useState, useEffect } from 'react';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';
import { Projects } from '/imports/api/projects';
import { useNavigate, useParams } from "react-router-dom";
import Page from '../components/Page';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import ProjectForm from './ProjectForm';

export const EditProject = () => {
    const params = useParams();
    const navigate = useNavigate();

    const model = useTracker(() => Projects.findOne({_id: params.id}));

    const handleSubmit = (project) => {
      Projects.update(project._id, {
        $set: {
          title: project.title,
          description: project.description,
          due: project.due
        }
      })
      navigate(`/projects/${link._id}`);
    }

    return (
      <Page title="Edit Project">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Edit Project
            </Typography>
          </Stack>
          <Grid container>
            {model &&
              <ProjectForm handleSubmit={handleSubmit}
                        prefilledModel={model} />
            }
          </Grid>
        </Container>
      </Page>
    );
};
