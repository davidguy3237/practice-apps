import React from 'react';
import WordListEntry from './WordListEntry.jsx';

const WordList = ({words, handleDeletion}) => {

  return (
    <div className='word-list'>
      {words.length > 0 ? words.map((wordObj, index) => <WordListEntry key={index} wordObj={wordObj} handleDeletion={handleDeletion}/>)
      : 'No words here...'}
    </div>
  )
}

export default WordList;