import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Projects } from '/imports/api/projects';
import TextField from '@mui/material/TextField';
import { Link as RouterLink } from 'react-router-dom';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import Scrollbar from '../components/Scrollbar';
import {
  Card,
  Box,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableSortLabel,
  TableContainer,
  TablePagination,
  Link,
} from '@mui/material';
import TableHead from '../components/TableHead'

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'team', label: 'Team', alignRight: false },
  { id: '' },
];

export function ProjectList(){
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');

  const projects = useTracker(() => {
    return Projects.find({complete: false}).fetch();
  }, []);

  const handleRequestSort = () => {}

  return (
    <Page title="Projects">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          <Button variant="contained" component={RouterLink} to="/projects/new" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Project
          </Button>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    onRequestSort={handleRequestSort}
                  />
                <TableBody>
                  {projects.map((project) => {
                    const { _id, name, due } = project;

                    return (
                      <TableRow
                        key={_id}
                      >
                        <TableCell component="th" scope="row">
                          <Link component={RouterLink} to={`/projects/${_id}`}>
                            {name}
                          </Link>
                        </TableCell>
                        <TableCell align="left">{due.toDateString()}</TableCell>
                        <TableCell align="right">
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>

              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}
