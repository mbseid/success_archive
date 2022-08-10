import React, { useState, useEffect } from 'react';
import { AutoForm, AutoField, ErrorsField, SubmitField } from 'uniforms-mui';
import { ProjectBridge as schema } from '/imports/api/projects';

export default function ProjetForm({handleSubmit, prefilledModel}){

    const preSubmit = handleSubmit

    return (
      <AutoForm schema={schema}
                model={prefilledModel}
                onSubmit={preSubmit}>
        <AutoField name="title" />
        <AutoField name="url" />
        <AutoField name="due" />
        <ErrorsField />
        <SubmitField />
    </AutoForm>
    );
};
