import React, { useState } from 'react';
import { AutoForm, AutoField, ErrorsField, SubmitField } from 'uniforms-mui';
import { LinkBridge as schema } from '/imports/api/links';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Links } from '/imports/api/links';
import { useNavigate } from "react-router-dom";

export const NewLink = () => {
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (value) => {
        const link = {
            ...value,
            tags: tags
        }
        Links.insert(link)
        navigate("/links");
    }

    return (
        <div>
            <AutoForm schema={schema} onSubmit={handleSubmit}>
                <AutoField name="title" />
                <AutoField name="url" />
                <AutoField name="description" />
                <Autocomplete
                    multiple
                    value={tags}
                    onChange={(event, newTags) => setTags([])}
                    id="tags-outlined"
                    sx={{ marginTop: '8px', marginBottom: '8px' }}
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
                            label="Tags"
                            placeholder="Tags"
                        />
                    )}
                />
                <ErrorsField />
                <SubmitField />
            </AutoForm>
            {/* https://mui.com/material-ui/react-autocomplete/#multiple-values */}
        </div>
    );
};
