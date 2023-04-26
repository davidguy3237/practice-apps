import React from 'react';
import WordListEntry from './WordListEntry.jsx';

const WordList = ({words}) => {

  return (
    <div className='word-list'>
      {words.length > 0 ? words.map((word, index) => <WordListEntry key={index} word={word} />)
      : 'No words here...'}
    </div>
  )
}

export default WordList;