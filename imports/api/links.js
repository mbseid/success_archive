import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SuccessAutoCreate from '../ui/form/SuccessAutoCreate';

export const Links = new Mongo.Collection('links');

const LinkSchema = new SimpleSchema({
    url: {
        type: String,
        label: 'URL',
        uniforms: { component: SuccessAutoCreate },
    },
    title: {
        type: String,
        label: 'Title',
    },
    description: {
        type: String,
        label: "Description",
    },
    tags: {
      type: Array,
    },
    'tags.$': {
      type: String
    }
})
Links.attachSchema(LinkSchema);
export const LinkBridge = new SimpleSchema2Bridge(LinkSchema)
