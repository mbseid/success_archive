import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';

export const People = new Mongo.Collection('people');
const PeopleSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name',
    },
    email: {
        type: String,
        label: 'Email',
    },
    lastContact: {
        type: Date,
        label: "Last Contacted",
        defaultValue: new Date(),
        uniforms: {
            type: 'date'
        }
    },
    log: {
        type: Array,
    },
    "log.$": Object,
    "log.$.date": Date,
    "log.$.note": String,
})
People.attachSchema(PeopleSchema);
export const PeopleBridge = new SimpleSchema2Bridge(PeopleSchema)