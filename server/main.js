import { Meteor } from 'meteor/meteor';
import { Links } from '/imports/api/links';
import { People } from '/imports/api/people';
import { Projects } from '/imports/api/projects';
import { Me } from '/imports/api/me';
import { migration } from './migrations';


Meteor.startup(async () => {
    Migrations.migrateTo('latest');
});

Meteor.methods({
    'links.distinctTags'(){
        return Links.rawCollection().distinct('tags')
    }
})
