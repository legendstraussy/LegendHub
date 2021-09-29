import { useState } from 'react';

const useLocalStorage = () => {
  const [storage, setStorage] = useState(null);

  const setValue = (key, value) => {
    try {
      // eslint-disable-next-line no-undef
      const item = window.localStorage.getItem(key);
      const valueToStore = value instanceof Function ? value(item) : value;
      setStorage(valueToStore);
      // eslint-disable-next-line no-undef
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    setStorage: setValue,
    storage,
  };
};

export default useLocalStorage;
