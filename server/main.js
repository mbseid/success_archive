import { Meteor } from 'meteor/meteor';
import { Links } from '/imports/api/links';
import { People } from '/imports/api/people';
import { Projects } from '/imports/api/projects';
import { Me } from '/imports/api/me';


Meteor.startup(async () => {
    const me = await Me.findOne()

    if(!me){
        const me = {
            projectOrder: [],
            recentLinks: []
        }
    }
});
Meteor.methods({
    'links.distinctTags'(){
        return Links.rawCollection().distinct('tags')
    }
})
