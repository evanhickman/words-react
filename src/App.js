import { useState } from 'react';
import { TextInput } from './components/TextInput';
import { TextOutput } from './components/TextOutput';

function App() {
  return (
    <div>
      <section>
        <h1 className='text-white text-4xl text-center'>Words</h1>
      </section>
      <section>
        <div className='container'>
          <TextOutput text='hey' />
          <TextInput />
        </div>
      </section>
    </div>
  );
}

export default App;
