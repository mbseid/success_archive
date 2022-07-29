import React, {useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Links } from '/imports/api/links';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

export function LinkList(){
  const [searchQuery, setSearchQuery] = useState('')

  const links = useTracker(() => {
    let search = {}
    if(searchQuery != ''){
      search = {
        title: {$regex : new RegExp(searchQuery, "i")}
      }
    }
    return Links.find(search).fetch();
  }, [searchQuery]);

  return (
    <div>
      <Link to="/links/new">
        New Link
      </Link>
      <h2>Links</h2>

      <TextField value={searchQuery}
                 onChange={(event) => setSearchQuery(event.target.value)}
                 id="standard-basic" label="Standard" variant="standard" />
      <ul>
        {links.map((link) => (
            <li key={link._id}>
                <a href={link.url}>
                    <h2>{link.title}</h2>
                </a>
                {link.tags &&
                  <p>{link.tags.map(tag => `#${tag}`).join(" ")}</p>
                }
            </li>
        ))}
      </ul>
    </div>
  );
}
