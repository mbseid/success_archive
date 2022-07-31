import React, { useState, useEffect } from 'react';
import { AutoForm, AutoField, ErrorsField, SubmitField } from 'uniforms-mui';
import { LinkBridge as schema } from '/imports/api/links';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useTracker } from 'meteor/react-meteor-data';
import { Links } from '/imports/api/links';
import { useNavigate, useSearchParams } from "react-router-dom";
import Page from '../components/Page';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';

export const NewLink = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [tags, setTags] = useState([]);
    const [tagList, setTagList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Meteor.call('links.distinctTags', {}, (err, res) => {
            setTagList(res)
        })
    }, [])

    const prefilledModel = {
        title: searchParams.get('title') || "",
        url: searchParams.get('url') || "",
        description: searchParams.get('description') || ""
    }

    const handleSubmit = (value) => {
        const link = {
            ...value,
            tags: tags
        }
        Links.insert(link)
        navigate("/links");
    }

    return (
      <Page title="Add Link">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Add Link
            </Typography>
          </Stack>
          <Grid container>
            <AutoForm schema={schema}
                          model={prefilledModel}
                          onSubmit={handleSubmit}>
                  <AutoField name="title" />
                  <AutoField name="url" />
                  <AutoField name="description" />
                  <Autocomplete
                      multiple
                      value={tags}
                      onChange={(event, newTags) => setTags(newTags)}
                      id="tags-outlined"
                      sx={{ marginTop: '8px', marginBottom: '8px' }}
                      options={tagList}
                      defaultValue={[]}
                      freeSolo
                      renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                          ))
                      }
                      renderInput={(params) => (
                          <TextField
                              {...params}
                              label="Tags"
                              placeholder="Tags"
                          />
                      )}
                  />
                  <ErrorsField />
                  <SubmitField />
              </AutoForm>
          </Grid>
        </Container>
      </Page>
    );
};
