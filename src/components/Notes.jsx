import React from 'react';
import '../scss/components/Notes.scss';
import NoteBlock from './NoteBlock';

function Notes({ notes, setNotes, setOpenNote }) {
  const dropNotes = (id) => {
    setNotes([...notes].filter((note) => note.id !== id));
    localStorage.setItem('notes', JSON.stringify([...notes].filter((note) => note.id !== id)));
  };
  console.log(localStorage.getItem('notes'));
  return (
    <div className="notes">
      {notes.map((items) => (
        <NoteBlock
          dropNotes={dropNotes}
          key={items.id}
          item={items}
          setOpenNote={setOpenNote}
          notes={notes}
        />
      ))}
    </div>
  );
}

export default Notes;
