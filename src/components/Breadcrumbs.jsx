import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/Breadcrumbs.scss';

function Breadcrumbs({ openNote, note }) {
  return (
    <div className="breadcrumbs">
      <Link to="/FrontendTestTask/">
        <span className="breadcrumbs__main">Главная</span>
      </Link>
      &nbsp;/&nbsp;{' '}
      <p className="breadcrumbs__title">{openNote.title ? openNote.title : note.title}</p>
    </div>
  );
}

export default Breadcrumbs;
