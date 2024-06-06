import { useState } from 'react';
import useDebounce from './hooks/useDebounce';

export default function App() {

  const [inputValue, setInputValue] = useState('');

  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <div>
      {debouncedValue}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  )
}
