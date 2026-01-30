import React from 'react';

// Step 1: Define a type for props
interface GreetingProps {
  name: string; // The component expects a 'name' of type string
}

// Step 2: Create the functional component using the props type
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div style={{ fontSize: '24px', color: '#1e90ff' }}>
      Hello, {name}!
    </div>
  );
};

// Step 3: Export the component so it can be used in App.tsx
export default Greeting;
