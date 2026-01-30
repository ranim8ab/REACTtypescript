import React, { useState } from 'react';

// Step 1: Create a functional component
const Counter: React.FC = () => {
  // Step 2: Define a number state
  const [count, setCount] = useState<number>(0);

  // Step 3: Render the count and a button to increment it
  return (
    <div style={{ marginTop: '20px' }}>
      <p style={{ fontSize: '20px' }}>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#1e90ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Increment
      </button>
    </div>
  );
};

// Step 4: Export the component
export default Counter;
