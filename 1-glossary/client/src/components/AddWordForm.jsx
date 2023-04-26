import React from 'react';

const AddWordForm = ({handleSubmission}) => {

  return (
    <form action='http://localhost:3000/words' method='POST' className='add-word' onSubmit={handleSubmission}>
      <input type='text' id='word-text-bar' required />
      <input type='text' id='description-text-bar' required />
      <input type='submit'/>
    </form>
  )
};

export default AddWordForm;