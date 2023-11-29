'use client';

import { useAtom } from 'jotai';

import { Button } from '../ui/button';
import { darkModeAtom } from './atoms';

export const TextEditor = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  return (
    <div>
      <div>{darkMode}</div>
      <Button onClick={() => {
        setDarkMode(!darkMode);
      }}
      >
        SetMode
      </Button>
    </div>
  );
};
