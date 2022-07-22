import React from 'react';
import { AutoForm, AutoField } from 'uniforms-mui';
import { LinkBridge as schema } from '/imports/api/links';

export const NewLink = () => (
    <div>
        <AutoForm schema={schema} onSubmit={console.log} />
        {/* https://mui.com/material-ui/react-autocomplete/#multiple-values */}
    </div>
);
