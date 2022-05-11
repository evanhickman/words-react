import { useState, useEffect } from 'react';
import { useInput } from './hooks/useInput';
import { wordsArr } from './data/words';

function App() {
  const { value, bind, reset } = useInput('');
  const [message, setMessage] = useState('');
  const [words, setWords] = useState(wordsArr);

  useEffect(() => {
    setMessage(words[Math.floor(Math.random() * words.length)]);
  }, [words]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWords((orig) => [...orig, value]);
    reset();
  };

  return (
    <div>
      <section>
        <h1 className='text-yellow-lite text-4xl text-center'>Words</h1>
      </section>
      <section>
        <div className='container'>
          <div className='bg-white p-4 w-full mb-4'>{message}</div>
          <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
            <label htmlFor='text' aria-label='Text' />
            <input
              type='text'
              name='text'
              id='text'
              {...bind}
              className='w-full rounded-full px-4 py-2'
            />
            <input
              type='submit'
              value='Submit'
              className='bg-yellow text-green block rounded-full px-4 py-2 mt-4 mx-auto'
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
