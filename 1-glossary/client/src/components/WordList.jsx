import React from 'react';
import WordListEntry from './WordListEntry.jsx';

const WordList = ({words, handleDelete, handlePatch}) => {

  return (
    <div className='word-list'>
      {words.length > 0 ? words.map((wordObj, index) =>
      <WordListEntry key={index} wordObj={wordObj} handleDelete={handleDelete} handlePatch={handlePatch} />)
      : 'No words here...'}
    </div>
  )
}

export default WordList;