import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { PeopleList } from './PeopleList.jsx'; 
import { PersonAddForm } from './PersonAddForm'; 


export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
    <PeopleList />
    <PersonAddForm />
  </div>
);
