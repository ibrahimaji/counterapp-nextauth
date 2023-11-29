'use client';

import React, { useState } from 'react';

import { Button } from '../ui/button';

interface CounterProps {
  initialValue: number;
}
export const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p className="flex items-center justify-center font-bold text-xl">
        Count:
        {count}
      </p>
      <Button onClick={increment} className="mr-2">Increment</Button>
      <Button onClick={decrement}>Decrement</Button>

    </div>
  );
};
