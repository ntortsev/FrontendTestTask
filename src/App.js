import { Main, Note } from './pages';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import React from 'react';

function App() {
  const [notes, setNotes] = React.useState([]);
  const [openNote, setOpenNote] = React.useState({});

  React.useEffect(() => {
    if (localStorage.getItem('notes')) {
      setNotes(JSON.parse(localStorage.getItem('notes')));
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/FrontendTestTask/"
        element={<Main setNotes={setNotes} notes={notes} setOpenNote={setOpenNote} />}
      />
      <Route path="/FrontendTestTask/note" element={<Note openNote={openNote} />} />
    </Routes>
  );
}

export default App;
