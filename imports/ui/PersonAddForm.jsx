import React from 'react';
import { AutoForm } from 'uniforms-mui';

import { PeopleBridge as schema } from '/imports/api/person';

export const PersonAddForm = () => {
  return (
    <AutoForm schema={schema} onSubmit={console.log} />
  );
};
