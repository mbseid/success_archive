import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { People } from '/imports/api/person';

export const PeopleList = () => {
  const links = useTracker(() => {
    return People.find().fetch();
  });

  return (
    <div>
      <h2>contacts</h2>
      <ul></ul>
    </div>
  );
};
