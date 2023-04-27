import React from 'react';
import WordListEntry from './WordListEntry.jsx';

const WordList = ({words, search, handleDelete, handlePatch}) => {

  let filteredWords = words.filter(word => word.word.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='word-list'>
      {filteredWords.length > 0 ? filteredWords.map((wordObj, index) =>
      <WordListEntry key={index} wordObj={wordObj} handleDelete={handleDelete} handlePatch={handlePatch} />)
      : 'No words here...'}
    </div>
  )
}

export default WordList;