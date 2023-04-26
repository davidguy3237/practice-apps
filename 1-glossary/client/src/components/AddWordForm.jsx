import React from 'react';

const AddWordForm = ({handleSubmission}) => {

  return (
    <form className='add-word' onSubmit={handleSubmission}>
      <h3>Add a word to the database</h3>
      <input type='text' id='word-text-bar' placeholder='Add a word' autoFocus required />
      <input type='text' id='description-text-bar' placeholder='Add a description' required />
      <input type='submit'/>
    </form>
  )
};

export default AddWordForm;