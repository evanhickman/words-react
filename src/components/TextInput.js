import { useState, useRef } from 'react';
import { useInput } from '../hooks/useInput';
import { Submit } from './Submit';

export const TextInput = () => {
  const { value, bind, reset } = useInput('');
  const [words, setWords] = useState([
    'ziggle',
    'deef',
    'squid',
    'chittle',
    'squoot',
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWords((orig) => [...orig, value]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
      {words.map((word, i) => (
        <div key={i}>{word}</div>
      ))}
      <label htmlFor='text' aria-label='Text' />
      <input
        type='text'
        name='text'
        id='text'
        {...bind}
        className='w-full rounded-full px-4 py-2'
      />
      <Submit />
    </form>
  );
};
