import React, { useState, useEffect } from 'react';
import { AutoForm, AutoField, ErrorsField, SubmitField } from 'uniforms-mui';
import { LinkBridge as schema } from '/imports/api/links';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useTracker } from 'meteor/react-meteor-data';
import { Links } from '/imports/api/links';
import { useNavigate, useSearchParams } from "react-router-dom";

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
        <div>
            <h2>Add Link</h2>
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
            {/* https://mui.com/material-ui/react-autocomplete/#multiple-values */}
        </div>
    );
};
