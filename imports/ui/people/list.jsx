import React from 'react';

import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Box,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableSortLabel,
  TableContainer,
  TablePagination,
  Link,
} from '@mui/material';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
// import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// meteor
import { useTracker } from 'meteor/react-meteor-data';
import { People } from '/imports/api/people';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'team', label: 'Team', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------
const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
};

function UserListHead({
  order,
  orderBy,
  headLabel,
  onRequestSort,
}) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function PeopleList() {

  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');

  const [searchQuery, setFilterName] = useState('');

  const people = useTracker(() => {
    let search = {}
    if(searchQuery != ''){
      search = {
        $or: [
          {name: {$regex : new RegExp(searchQuery, "i")}},
        ]
      }
    }
    return People.find(search).fetch();
  }, [searchQuery]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Page title="People">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            People
          </Typography>
          <Button variant="contained" component={RouterLink} to="/people/new" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Person
          </Button>
        </Stack>

        <Card>


          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    onRequestSort={handleRequestSort}
                  />
                <TableBody>
                  {people.map((person) => {
                    const { _id, name, team, role } = person;

                    return (
                      <TableRow
                        key={_id}
                      >
                        <TableCell component="th" scope="row">
                          <Link component={RouterLink} to={`/people/${_id}`}>
                            {name}
                          </Link>
                        </TableCell>
                        <TableCell align="left">{team}</TableCell>
                        <TableCell align="left">{role}</TableCell>

                        <TableCell align="right">
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>

                {searchQuery != '' && people.length == 0 && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={searchQuery} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}
