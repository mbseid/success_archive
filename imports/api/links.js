import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';

export const Links = new Mongo.Collection('links');

const LinkSchema = new SimpleSchema({
    url: {
        type: String,
        label: 'URL',
    },
    title: {
        type: String,
        label: 'Title',
    },
    description: {
        type: String,
        label: "Description",
        optional: true
    },
    tags: {
      type: Array,
      optional: true
    },
    'tags.$': {
      type: String
    }
})
Links.attachSchema(LinkSchema);
export const LinkBridge = new SimpleSchema2Bridge(LinkSchema)
