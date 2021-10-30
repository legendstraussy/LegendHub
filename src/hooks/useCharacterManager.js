import { useCallback } from 'react';
import useLocalStorage from './useLocalStorage';
import { useRecoilState } from 'recoil';
import { characterState, charactersState } from 'data/characterState';
import { v4 as uuidv4 } from 'uuid';
import { character as characterDefault } from 'data/constants';
import { isDuplicateCharacter } from 'utils/utilFns';

const useCharacterManager = () => {
  const { getStorage, setStorage } = useLocalStorage();
  const [characters, setCharacters] = useRecoilState(charactersState);
  const [character, setCharacter] = useRecoilState(characterState);

  const saveCharacter = newCharacter => {
    try {
      setStorage('character', newCharacter ? newCharacter : null);
      setCharacter(newCharacter);
    } catch {
      throw new Error;
    }
  }

  const saveCharacters = newCharacters => {
    try {
      setStorage('characters', newCharacters?.length ? newCharacters : null);
      setCharacters(newCharacters);
    } catch {
      throw new Error;
    }
  }

  const createCharacter = ({ name, version }) => {
    const newCharacter = { ...characterDefault, name, version, id: uuidv4() };
    const storedCharacters = getStorage('characters');
    if (!newCharacter.name) {
      return { success: false, message: `Please provide a character name.` };
    }
    if (!newCharacter.version) {
      return { success: false, message: `Please provide a character version (ex. '60 dex con fighter').` };
    }
    if (newCharacter?.name?.length > 13) {
      return { success: false, message: `Error: Character name contains too many characters.` };
    }
    let updatedCharacters = [newCharacter];
    if (storedCharacters) {
      const duplicateCharacter = storedCharacters
        ?.some(character => isDuplicateCharacter(character, newCharacter));
      if (duplicateCharacter) {
        return { success: false, message: `Error: Character ${newCharacter.name} already exists.` };
      }
      updatedCharacters = [...storedCharacters, newCharacter];
    }
    try {
      saveCharacters(updatedCharacters);
      saveCharacter(newCharacter);
      return { success: true, message: `Success: Character created.` };
    } catch (e) {
      return { success: false, message: 'Error: Could not save to local storage.'}
    }
  };

  const readCharacters = useCallback(() => {
    const storedCharacters = getStorage('characters');
    const storedCharacter = getStorage('character');
    if (!storedCharacters) {
      return { success: false, message: 'Error: No characters found in local storage.'}
    }
    try {
      setCharacters(storedCharacters);
      if (!storedCharacter) {
        saveCharacter(storedCharacters[0]);
      } else {
        setCharacter(storedCharacter);
      }
      return { success: true, message: `Success: Characters loaded.` };
    } catch {
      return { success: false, message: `Error: Could not load characters.` };
    }
  }, []);

  const deleteCharacter = () => {
    const storedCharacters = getStorage('characters');
    const storedCharacter = getStorage('character');
    if (!storedCharacter) {
      return { success: false, message: 'Error: Character does not exist in local storage.'}
    }
    if (storedCharacters) {
      try {
        const remainingCharacters = storedCharacters
          .filter(char => char.id !== storedCharacter.id);
        saveCharacter(remainingCharacters[0])
        saveCharacters(remainingCharacters);
        return { success: true, message: `Success: Character deleted.` };
      } catch {
        return { success: false, message: `Error: Could not delete character.` };
      }
    }
    return { success: false, message: `Error: No characters found in local storage.` };
  };

  // const exportCharacter = () => {

  // };

  // const importCharacter = () => {

  // };

  // const saveCharacter = () => {

  // };

  // const undoLastChange = () => {

  // };

  // const clearEquipment = () => {

  // };

  return {
    // clear: clearEquipment,
    character,
    characters,
    create: createCharacter,
    remove: deleteCharacter,
    read: readCharacters,
    saveCharacter,
    // delete: deleteCharacter,
    // export: exportCharacter,
    // import: importCharacter,
    // undo: undoLastChange,
  };
};

export default useCharacterManager;
