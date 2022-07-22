import React from 'react';
import { AutoForm, AutoField } from 'uniforms-mui';
import { LinkBridge as schema } from '/imports/api/links';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export const NewLink = () => (
    <div>
        <AutoForm schema={schema} onSubmit={console.log}>
            <AutoField name="url" />
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
        </AutoForm>
        {/* https://mui.com/material-ui/react-autocomplete/#multiple-values */}
    </div>
);
