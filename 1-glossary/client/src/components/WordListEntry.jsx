import React from 'react';

const WordListEntry = ({wordObj, handleDeletion}) => {
  const {word, definition} = wordObj;

  return (
    <div id='word' className='word-list-entry'>
      <h3>{word}</h3>
      <p>{definition}</p>
      <button>Edit</button>
      <button onClick={() => {
        handleDeletion(word);
      }}>Delete</button>
    </div>
  );
};

export default WordListEntry;