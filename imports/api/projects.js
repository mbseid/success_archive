import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { LongTextField } from 'uniforms-mui';

export const Projects = new Mongo.Collection('projects');

const ProjectSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name',
    },
    description: {
        type: String,
        label: "Description",
        optional: true,
        uniforms: { component: LongTextField },
    },
    due: {
        type: Date,
    }
})
Projects.attachSchema(ProjectSchema);
export const ProjectBridge = new SimpleSchema2Bridge(ProjectSchema)
