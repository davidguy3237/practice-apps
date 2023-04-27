import React from 'react';
const {useState} = React;

const WordListEntry = ({wordObj, handleDeletion, handlePatch}) => {
  const [editable, setEditable] = useState(false);

  const {word, definition} = wordObj;

  const onEdit = () => {
    let newDefinition = document.getElementById(word + '-definition').value;
    let newWord = document.getElementById(word).value;
    if (editable && (word !== newWord || definition !== newDefinition)) {
      setEditable(!editable);
      handlePatch(wordObj);
    } else {
      setEditable(!editable);
    }
  }

  return (
    <div className='word-list-entry'>
      {
        editable ? (
          <div className='word-container'>
            <input type='text' id={word} defaultValue={word} autoFocus />
            <br />
            <input type='text' id={word + '-definition'} defaultValue={definition} />
          </div>
        ) : (
          <div className='word-container'>
            <h3 id={word}>{word}</h3>
            <p id={word + '-definition'}>{definition}</p>
          </div>
        )
      }
      <button className='edit-button' onClick={onEdit}>{editable ? 'Done' : 'Edit'}</button>
      <button className='delete-button' onClick={() => {
        handleDeletion(wordObj);
      }}>Delete</button>
    </div>
  );
};

export default WordListEntry;