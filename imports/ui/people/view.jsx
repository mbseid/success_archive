import React from 'react';

import Page from '../components/Page';
import {
  Button,
  Container,
  Stack,
  TextField,
  Box,
  Typography,
  Card,
  Grid
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { useState } from 'react';


// ----------------------------------------------------------------------

ProfileCover.propTypes = {
};

function ProfileCover({ }) {
  return (
    <Box
      sx={{
        ml: { md: 3 },
        mt: { xs: 1, md: 0 },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Stack>
        <Typography variant="h4">{"Michael Seid"}</Typography>
        <Typography sx={{ opacity: 0.72 }}>{"MLUX"}</Typography>
      </Stack>
    </Box>

  );
}

function AddNoteForm(){
  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={3}>
        <TextField
          multiline
          fullWidth
          rows={4}
          placeholder="Record what you are discussing"
          sx={{
            '& fieldset': {
              borderWidth: `1px !important`,
              borderColor: (theme) => `${theme.palette.grey[500_32]} !important`,
            },
          }}
        />

        <TextField label="Date" variant="outlined" type='date'/>
      </Stack>

      <Box
        sx={{
          mt: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="contained">Save</Button>
        <Button variant="contained" color="error">Cancel</Button>
      </Box>
    </Card>
  )
}

export default function ViewPerson(){
  const [addNote, setAddNote] = useState(false)

  return (
    <Page title="People">
      <Container>
        <Stack spacing={3}>
          <ProfileCover />
          {!addNote?
            <Grid container>
              <Grid item s={3}>
                <Button onClick={() => setAddNote(true)}>
                  Add Note
                </Button>
              </Grid>
            </Grid>
          :
            <AddNoteForm />
          }
          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary" style={{flex: 0.1}}>
                07/29/22
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>We ate today.</TimelineContent>
            </TimelineItem>
          </Timeline>
          </Stack>
      </Container>
    </Page>
  )
}
