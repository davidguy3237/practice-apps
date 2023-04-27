import React from 'react';
const {useState} = React;

const WordListEntry = ({wordObj, handleDeletion, handlePatch}) => {
  const [editable, setEditable] = useState(false);

  const {word, definition} = wordObj;

  const onEdit = () => {
    let newDefinition = document.getElementById(word + '-definition').innerText;
    let newWord = document.getElementById(word).innerText;
    if (editable && (word !== newWord || definition !== newDefinition)) {
      setEditable(!editable);
      handlePatch(wordObj);
    } else {
      setEditable(!editable);
    }
  }

  return (
    <div className='word-list-entry'>
      <h3 id={word} contentEditable={editable}>{word}</h3>
      <p id={word + '-definition'} contentEditable={editable}>{definition}</p>
      <button className='edit-button' onClick={onEdit}>{editable ? 'Done' : 'Edit'}</button>
      <button className='delete-button' onClick={() => {
        handleDeletion(wordObj);
      }}>Delete</button>
    </div>
  );
};

export default WordListEntry;