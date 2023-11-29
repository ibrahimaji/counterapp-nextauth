import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const darkModeAtom = atomWithStorage('darkMode', false);

export const nameAtom = atom<string>('');
