import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (value) {
      if (value % 2 == 0) {
        setMessage('Number is even!');
      } else {
        setMessage('Number is odd!');
      }
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className='App'>
      <span className='description'>Check the oddity of number!</span>
      <input className='input' value={value} onChange={handleChange} />
      <p className='text'>{message}</p>
    </div>
  );
}

export default App;
