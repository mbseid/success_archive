import React from 'react';
import { connectField } from 'uniforms';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function SuccessAutoCreate({ onChange, value }) {
  return (
    <Autocomplete
    multiple
    id="tags-outlined"
    options={[]}
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
            label="freeSolo"
            placeholder="Favorites"
        />
    )}
/>
  );
}

export default connectField(SuccessAutoCreate);