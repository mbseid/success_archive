import React, {useState} from 'react';

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
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Projects } from '/imports/api/projects'

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';
import { sortBy } from 'lodash';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'



// ----------------------------------------------------------------------

ProfileCover.propTypes = {
};

function ProfileCover({ project }) {
  const { name, due } = project;

  return (
    <Box
      sx={{
        ml: { md: 3 },
        mt: { xs: 1, md: 0 },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Stack>
        <Typography variant="h4">{name}</Typography>
        <Typography sx={{ opacity: 0.72 }}>{`Due: ${due.toDateString()}`}</Typography>
      </Stack>
    </Box>

  );
}

function AddNoteForm({onSubmit, onCancel}){
  const [note, setNote] = useState('')
  const [date, setDate] = useState(new Date())
  const submit = () => {
    const log = {
      note,
      date
    }
    onSubmit(log)
  }
  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={3}>
        <TextField
          multiline
          fullWidth
          minRows={4}
          placeholder="Record what you are discussing"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          sx={{
            '& fieldset': {
              borderWidth: `1px !important`,
              borderColor: (theme) => `${theme.palette.grey[500_32]} !important`,
            },
          }}
        />

        <DesktopDatePicker
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={(newDate) => setDate(newDate)}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>

      <Box
        sx={{
          mt: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          flexDirection: 'row-reverse',
          columnGap: '2rem'
        }}
      >
        <Button variant="contained" onClick={submit}>Save</Button>
        <Button variant="outlined" color="error" onClick={onCancel}>Cancel</Button>
      </Box>
    </Card>
  )
}

const MarkdownBox = styled(Box)({
  '& ul': {
    padding: 'revert'
  },
  '& li': {
    padding: 'revert'
  }
});

export default function ViewProject(){
  const [addNote, setAddNote] = useState(false)

  const params = useParams();
  const navigate = useNavigate();

  const project = useTracker(() => {
    return Projects.findOne({_id: params.id})
  });

  return (
    <Page title="People">
      <Container>
        <Stack spacing={3}>
          {project ?
          <>
            <ProfileCover project={project} />
            {!addNote?
              <Grid container>
                <Grid item s={3}>
                  <Button onClick={() => setAddNote(true)}>
                    Add Note
                  </Button>
                </Grid>
              </Grid>
            :
              <AddNoteForm
                onSubmit={submitNote}
                onCancel={() => setAddNote(false)}
                />
            }
          </>
          :
          <h6>loading....</h6>
          }

        </Stack>
      </Container>
    </Page>
  )
}
