import React from 'react';

const AddWordForm = ({handleSubmit}) => {

  return (
    <form method='POST' className='add-word' onSubmit={handleSubmit}>
      <h3>Add a word to the database</h3>
      <input type='text' id='word-text-bar' placeholder='Add a word' autoFocus required />
      <input type='text' id='description-text-bar' placeholder='Add a description' required />
      <input type='submit'/>
    </form>
  )
};

export default AddWordForm;