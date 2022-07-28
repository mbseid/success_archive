import { Meteor } from 'meteor/meteor';
import { Links } from '/imports/api/links';

Meteor.startup(() => {

});
Meteor.methods({
    'links.distinctTags'(){
        return Links.rawCollection().distinct('tags')
    }
})