// import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useCharacterManager = () => {
  // const [storage, setStorage] = useState(null);
  const { getStorage, setStorage } = useLocalStorage();

  // const clearEquipment = () => {

  // };

  const createCharacter = character => {
    const characters = getStorage('characters') || [];
    setStorage('characters', [...characters, character]);
  };

  // const deleteCharacter = () => {

  // };

  // const exportCharacter = () => {

  // };

  // const importCharacter = () => {

  // };

  // const saveCharacter = () => {

  // };

  // const undoLastChange = () => {

  // };

  return {
    // clear: clearEquipment,
    create: createCharacter,
    // delete: deleteCharacter,
    // export: exportCharacter,
    // import: importCharacter,
    // save: saveCharacter,
    // undo: undoLastChange,
  };
};

export default useCharacterManager;
