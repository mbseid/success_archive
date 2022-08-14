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

function ProfileCover({ project, completeClick }) {
  const { name, due } = project;

  return (
    <Box
      sx={{
        ml: { md: 3 },
        mt: { xs: 1, md: 0 },
        textAlign: { xs: 'center', md: 'left' },
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Stack>
        <Typography variant="h4">{name}</Typography>
        <Typography sx={{ opacity: 0.72 }}>{`Due: ${due.toDateString()}`}</Typography>
      </Stack>
      <Box>
          <Button variant="contained" color="success">Complete</Button>
      </Box>
    </Box>

  );
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
  const [editNote, setEditNotes] = useState(false)
  const [notes, setNotes] = useState()

  const params = useParams();
  const navigate = useNavigate();

  const project = useTracker(() => {
    return Projects.findOne({_id: params.id})
  });

  const editNotes = () => {
      setNotes(project.notes)
      setEditNotes(true)
  }

  const saveNotes = () => {
      Projects.update(project._id, {
        $set: {
            notes: notes
        }
      })
      setEditNotes(false)

  }

  return (
    <Page title="People">
      <Container>
        <Stack spacing={3}>
          {project ?
          <>
            <ProfileCover project={project} />
            {!editNote?
                <>
                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                        {project.notes}
                    </ReactMarkdown>
                    <Button onClick={editNotes} variant="outlined">Edit</Button>
                </>
            :
                <>
                    <TextField
                        multiline
                        fullWidth
                        minRows={4}
                        placeholder="Project Notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        sx={{
                        '& fieldset': {
                            borderWidth: `1px !important`,
                            borderColor: (theme) => `${theme.palette.grey[500_32]} !important`,
                        },
                        }}
                    />
                    <Button onClick={saveNotes} variant="outlined">Save</Button>
                </>
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
