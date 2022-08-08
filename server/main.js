import { Meteor } from 'meteor/meteor';
import { Links } from '/imports/api/links';
import { People } from '/imports/api/people';
import { Projects } from '/imports/api/projects';


Meteor.startup(() => {

});
Meteor.methods({
    'links.distinctTags'(){
        return Links.rawCollection().distinct('tags')
    }
})
