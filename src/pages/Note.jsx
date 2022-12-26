import React from 'react';
import { Breadcrumbs, OpenNote } from '../components';

function Note({ openNote }) {
  let title = JSON.parse(localStorage.getItem('notes'));
  let note = title[title.length - 1];
  console.log(title);
  return (
    <div className="note">
      <div className="container">
        <Breadcrumbs openNote={openNote} note={note} />
        <OpenNote openNote={openNote} note={note} />
      </div>
    </div>
  );
}

export default Note;
