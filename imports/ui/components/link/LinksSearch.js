import React from 'react';

import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import { Autocomplete, InputAdornment, Popper, TextField } from '@mui/material';
// components
import Iconify from '/imports/ui/components/Iconify';

// ----------------------------------------------------------------------

const PopperStyle = styled((props) => <Popper placement="bottom-start" {...props} />)({
  width: '280px !important',
});

// ----------------------------------------------------------------------

LinksSearch.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function LinksSearch({ tags, setSearchQuery }) {
  return (
    <TextField
      sx={{ width: 280 }}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search post..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
          </InputAdornment>
        )
      }}
    />
  );
}
