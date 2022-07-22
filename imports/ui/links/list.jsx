import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Links } from '/imports/api/links';

export const LinkList = () => {
  const links = useTracker(() => {
    return Links.find().fetch();
  });

  return (
    <div>
      <h2>Links</h2>
      <ul>
        {links.map((link) => {
            <li>
                <a href={link.url}>
                    {link.title}
                </a>
            </li>
        })}
      </ul>
    </div>
  );
};
