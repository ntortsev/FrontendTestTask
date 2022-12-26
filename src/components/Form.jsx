import React from 'react';
import '../scss/components/Form.scss';
import { v4 as uuidv4 } from 'uuid';

function Form({ setNotes, notes }) {
  const [inputTitle, setInputTitle] = React.useState('');
  const [inputSubtitle, setInputSubtitle] = React.useState('');

  const addNotes = (e) => {
    if (inputTitle.trim().length > 0 && inputSubtitle.trim().length > 0) {
      setInputSubtitle('');
      setInputTitle('');
      e.preventDefault();
      setNotes([...notes, { id: uuidv4(), title: inputTitle, subTitle: inputSubtitle }]);
      localStorage.setItem(
        'notes',
        JSON.stringify([...notes, { id: uuidv4(), title: inputTitle, subTitle: inputSubtitle }]),
      );
    } else {
      e.preventDefault();
      console.log('Заполните все поля');
    }
  };
  return (
    <div className="form">
      <h1 className="form__h1">Заметки</h1>
      <form onSubmit={(e) => addNotes(e)}>
        <label className="form__title">
          Заголовок
          <input type="text" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
        </label>
        <label className="form__desc">
          Описание
          <input
            type="text"
            value={inputSubtitle}
            onChange={(e) => setInputSubtitle(e.target.value)}
          />
        </label>
        <button className="form__button" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default Form;
