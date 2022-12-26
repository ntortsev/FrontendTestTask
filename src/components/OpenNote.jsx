import React from 'react';
import '../scss/components/OpenNote.scss';

function OpenNote({ openNote, note }) {
  return (
    <div className="open-note">
      <h1 className="open-note__title">{openNote.title ? openNote.title : note.title}</h1>
      <p className="open-note__subtitle">{openNote.subTitle ? openNote.subTitle : note.subTitle}</p>
    </div>
  );
}

export default OpenNote;
