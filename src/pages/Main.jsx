import React from 'react';
import { Form, Notes } from '../components';

function Main({notes, setNotes, setOpenNote}) {
  return (
    <div className="main">
      <div className="container">
        <div className="main__flex">
          <Form notes={notes} setNotes={setNotes} />
          <Notes notes={notes} setNotes={setNotes} setOpenNote={setOpenNote} />
        </div>
      </div>
    </div>
  );
}

export default Main;
