import React from 'react';

export const Submit = ({ text }) => {
  return (
    <input
      type='submit'
      value={text}
      className='bg-yellow text-green block rounded-full px-4 py-2 mt-4 mx-auto'
    />
  );
};
