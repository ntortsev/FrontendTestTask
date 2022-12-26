import React from 'react';
import '../scss/components/NoteBlock.scss';
import { Link } from 'react-router-dom';

function NoteBlock({ item, dropNotes, setOpenNote, notes }) {
  const openNote = (obj) => {
    setOpenNote(obj);
  };
  return (
    <div className="note-block">
      <div className="note-block__desc">
        <div className="note-block__desc--title">{item.title}</div>
        <div className="note-block__desc--subtitle">{item.subTitle}</div>
      </div>
      <div className="note-block__buttons">
        <Link to="/note">
          <button onClick={() => openNote(item)} className="note-block__buttons--blue">
            Открыть
          </button>
        </Link>
        <button onClick={() => dropNotes(item.id)} className="note-block__buttons--red">
          Удалить
        </button>
      </div>
    </div>
  );
}

export default NoteBlock;
