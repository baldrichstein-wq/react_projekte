import { useState, useEffect } from 'react';

export function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        return JSON.parse(stored);
      }
      return initialValue;
    } catch (error) {
      console.error(`Fehler beim Laden von "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Fehler beim Speichern von "${key}":`, error);
    }
  }, [key, state]);

  return [state, setState];
}
