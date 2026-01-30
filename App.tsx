import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

// Main App component
const App: React.FC = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      {/* Greeting component */}
      <Greeting name="Ranim" />
      
      {/* Counter component */}
      <Counter />
    </div>
  );
};

export default App;
