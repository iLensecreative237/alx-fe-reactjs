import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '1rem',
        marginTop: '2rem',
        backgroundColor: '#881188ff',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '300px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '0 5px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '0 5px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '0 5px' }}>Reset</button>
    </div>
  );
}

export default Counter;