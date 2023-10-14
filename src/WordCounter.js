import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  
  const countWords = () => {
    if (text.trim() === '') {
        return 0;
    }
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        placeholder="Type your paragraph here..."
        rows="4"
        onChange={handleChange}
        value={text}
      />
      <p>Word count: {countWords()}</p>
    </div>
  );
}

export default WordCounter;
