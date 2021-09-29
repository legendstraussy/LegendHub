/* eslint-disable no-undef */

const useLocalStorage = () => {
  const getValue = key => {
    try {
      const item = window.localStorage.getItem(key);
      return JSON.parse(item);
    } catch (error) {
      throw new Error(error);
    }
  };

  const setValue = (key, value) => {
    try {
      const item = window.localStorage.getItem(key);
      const valueToStore = value instanceof Function ? value(item) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    getStorage: getValue,
    setStorage: setValue,
  };
};

export default useLocalStorage;
