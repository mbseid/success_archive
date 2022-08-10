import React, { useState, useEffect } from 'react';
import { Links } from '/imports/api/links';
import { useNavigate, useSearchParams } from "react-router-dom";
import Page from '../components/Page';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import ProjectForm from './ProjectForm';

export const NewLink = () => {
    const navigate = useNavigate();

    const handleSubmit = (link) => {
        Links.insert(link)
        navigate("/projects");
    }

    return (
      <Page title="Add Link">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Create Project
            </Typography>
          </Stack>
          <Grid container>
            <LinkForm handleSubmit={handleSubmit}
                      prefilledModel={{}} />
          </Grid>
        </Container>
      </Page>
    );
};
