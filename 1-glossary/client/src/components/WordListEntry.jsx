import React from 'react';

const WordListEntry = (props) => {
  const {word, definition} = props.word;

  return (
    <div id='word' className='word-list-entry'>
      <h3>{word}</h3>
      <p>{definition}</p>
    </div>
  );
};

export default WordListEntry;