import { useCallback } from 'react';
import useLocalStorage from './useLocalStorage';
import { useRecoilState } from 'recoil';
import { characterState, charactersState } from 'data/characterState';
import { isDuplicateCharacter } from 'utils/utilFns';

const useCharacterManager = () => {
  const { getStorage, setStorage } = useLocalStorage();
  const [characters, setCharacters] = useRecoilState(charactersState);
  const [character, setCharacter] = useRecoilState(characterState);

  const saveCharacter = character => {
    try {
      console.log('bango', character)
      setStorage('character', character);
    } catch {
      return { success: false, message: 'Error: Could not save to local storage.'}
    }
    setCharacter(character);
    return { success: true, message: 'Success: Character saved to local storage.'}
  }

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

  const createCharacter = newCharacter => {
    const storedCharacters = getStorage('characters');
    if (newCharacter?.name?.length > 13) {
      return { success: false, message: `Error: Character name contains too many characters.` };
    }
    let updatedCharacters = [newCharacter];
    if (storedCharacters) {
      const existingCharacter = storedCharacters
        ?.some(character => isDuplicateCharacter(character, newCharacter));
      if (existingCharacter) {
        return { success: false, message: `Error: Character ${newCharacter.name} already exists.` };
      }
      updatedCharacters = [...storedCharacters, newCharacter];
    }
    try {
      setStorage('characters', updatedCharacters);
      saveCharacter(newCharacter);
      setCharacters(updatedCharacters);
      return { success: true, message: `Success: Character created.` };
    } catch (e) {
      return { success: false, message: 'Error: Could not save to local storage.'}
    }
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

  // const clearEquipment = () => {

  // };

  return {
    // clear: clearEquipment,
    character,
    characters,
    create: createCharacter,
    read: readCharacters,
    saveCharacter,
    // delete: deleteCharacter,
    // export: exportCharacter,
    // import: importCharacter,
    // undo: undoLastChange,
  };
};

export default useCharacterManager;
