import React from 'react';

const Page = ({page, setPage}) => {

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const handleNextClick = () => {
    setPage(page + 1);
  }

  return (
    <div className='pages-container'>
      <button className='previous-page' onClick={handlePrevClick}>Prev</button>
      <span className='page-display'>{page}</span>
      <button className='next-page' onClick={handleNextClick}>Next</button>
    </div>
  )
};

export default Page;