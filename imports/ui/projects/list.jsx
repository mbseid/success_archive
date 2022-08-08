import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Links } from '/imports/api/links';
import TextField from '@mui/material/TextField';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { LinkCard, LinksSearch, LinksSort } from '../components/link';

export function LinkList(){
  const [searchQuery, setSearchQuery] = useState('')

  const links = useTracker(() => {
    let search = {}
    if(searchQuery != ''){
      search = {
        $or: [
          {title: {$regex : new RegExp(searchQuery, "i")}},
          {'tags': {$regex : new RegExp(searchQuery, "i")}}
        ]
      }
    }
    return Links.find(search).fetch();
  }, [searchQuery]);

  return (
    <Page title="Links">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          <Button variant="contained" component={RouterLink} to="/projects/new" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Project
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <LinksSearch posts={links} setSearchQuery={setSearchQuery}/>
          {/* <LinksSort options={[]} /> */}
        </Stack>

        <Grid container spacing={3}>
          {links.map((link) => (
            <LinkCard key={link._id} item={link} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
