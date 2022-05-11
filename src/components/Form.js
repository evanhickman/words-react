import { useState, useRef } from 'react';

export const Form = () => {
  const [input, setInput] = useState('');
  const [words, setWords] = useState([
    'ziggle',
    'deef',
    'squid',
    'chittle',
    'squoot',
  ]);
  const inputEl = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setWords((orig) => [...orig, input]);
    inputEl.current.value = '';
  };

  const handleInputChange = (e) => setInput(e.currentTarget.value);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text' aria-label='Text' />
      <input
        type='text'
        name='text'
        id='text'
        onChange={handleInputChange}
        ref={inputEl}
      />
      <input type='submit' value='Submit' />
    </form>
  );
};
