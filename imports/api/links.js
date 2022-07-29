import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { LongTextField } from 'uniforms-mui';

export const Links = new Mongo.Collection('links');
Links.distinct = async (field) => {
  console.log('hi');
  return [1]
}

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
        optional: true,
        uniforms: { component: LongTextField },
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
