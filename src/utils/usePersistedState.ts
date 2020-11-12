// eslint-disable-next-line prettier/prettier
import {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const themeStoraged = localStorage.getItem(key);

    if (themeStoraged) {
      return JSON.parse(themeStoraged);
    }

    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
