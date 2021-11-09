import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { characterState, charactersState, selectedItemState } from 'data/characterState';
import { v4 as uuidv4 } from 'uuid';
import { character as characterDefault } from 'data/constants';
import { isDuplicateCharacter } from 'utils/utilFns';
import useLocalStorage from './useLocalStorage';

const useCharacterManager = () => {
  const { getStorage, setStorage } = useLocalStorage();
  const [characters, setCharacters] = useRecoilState(charactersState);
  const [character, setCharacter] = useRecoilState(characterState);
  const setSelectedItem = useSetRecoilState(selectedItemState);

  const saveCharacter = newCharacter => {
    try {
      setStorage('character', newCharacter || null);
      setCharacter(newCharacter);
    } catch {
      throw new Error();
    }
  };

  const saveCharacters = newCharacters => {
    try {
      setStorage('characters', newCharacters?.length ? newCharacters : null);
      setCharacters(newCharacters);
    } catch {
      throw new Error();
    }
  };

  const createCharacter = ({ name, version }) => {
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    const newCharacter = {
      ...characterDefault, name: formattedName, version, id: uuidv4(),
    };
    const storedCharacters = getStorage('characters');
    if (!newCharacter.name) {
      return { success: false, message: 'Please provide a character name.' };
    }
    if (!newCharacter.version) {
      return { success: false, message: 'Please provide a character version (ex. \'60 dex con fighter\').' };
    }
    if (newCharacter?.name?.length > 13) {
      return { success: false, message: 'Error: Character name contains too many characters.' };
    }
    let updatedCharacters = [newCharacter];
    if (storedCharacters) {
      const duplicateCharacter = storedCharacters
        ?.some(character => isDuplicateCharacter(character, newCharacter));
      if (duplicateCharacter) {
        return { success: false, message: 'Error: Character name and/or version already exists.' };
      }
      updatedCharacters = [...storedCharacters, newCharacter];
    }
    try {
      saveCharacters(updatedCharacters);
      saveCharacter(newCharacter);
      return { success: true, message: 'Success: Character created.' };
    } catch (e) {
      return { success: false, message: 'Error: Could not save to local storage.' };
    }
  };

  const updateCharacter = character => {
    const storedCharacters = getStorage('characters');
    const storedCharacter = getStorage('character');
    const updatedCharacter = { ...storedCharacter, ...character };
    if (!storedCharacters) {
      return { success: false, message: 'Error: Could not find characters in local storage.' };
    }
    if (!character.name) {
      return { success: false, message: 'Please provide a character name.' };
    }
    if (!character.version) {
      return { success: false, message: 'Please provide a character version (ex. \'60 dex con fighter\').' };
    }
    const duplicateCharacter = storedCharacters
      ?.some(c => isDuplicateCharacter(c, updatedCharacter));
    if (duplicateCharacter) {
      return { success: false, message: 'Error: Character name and/or version already exists.' };
    }
    const remainingCharacters = storedCharacters.filter(storedCharacter => storedCharacter?.id !== updatedCharacter.id);
    const updatedCharacters = [...remainingCharacters, updatedCharacter];

    try {
      saveCharacters(updatedCharacters);
      saveCharacter(updatedCharacter);
      return { success: true, message: 'Success: Character edited.' };
    } catch (e) {
      return { success: false, message: 'Error: Could not save to local storage.' };
    }
  };

  const cloneCharacter = ({ name, version }) => {
    const storedCharacters = getStorage('characters');
    const storedCharacter = getStorage('character');
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    const clonedCharacter = {
      ...characterDefault, equipment: storedCharacter?.equipment, name: formattedName, version, id: uuidv4(),
    };
    if (!storedCharacters) {
      return { success: false, message: 'Error: Could not find characters in local storage.' };
    }
    if (!name) {
      return { success: false, message: 'Please provide a character name.' };
    }
    if (!version) {
      return { success: false, message: 'Please provide a character version (ex. \'60 dex con fighter\').' };
    }

    const updatedCharacters = [...storedCharacters, clonedCharacter];

    try {
      saveCharacters(updatedCharacters);
      saveCharacter(clonedCharacter);
      return { success: true, message: 'Success: Character cloned.' };
    } catch (e) {
      return { success: false, message: 'Error: Could not save to local storage.' };
    }
  };

  const readCharacters = useCallback(() => {
    const storedCharacters = getStorage('characters');
    const storedCharacter = getStorage('character');
    if (!storedCharacters) {
      return { success: false, message: 'Error: No characters found in local storage.' };
    }
    try {
      setCharacters(storedCharacters);
      if (!storedCharacter) {
        saveCharacter(storedCharacters[0]);
      } else {
        setCharacter(storedCharacter);
      }
      return { success: true, message: 'Success: Characters loaded.' };
    } catch {
      return { success: false, message: 'Error: Could not load characters.' };
    }
  }, []);

  const deleteCharacter = () => {
    const storedCharacters = getStorage('characters');
    const storedCharacter = getStorage('character');
    if (!storedCharacter) {
      return { success: false, message: 'Error: Character does not exist in local storage.' };
    }
    if (storedCharacters) {
      try {
        const remainingCharacters = storedCharacters
          .filter(char => char.id !== storedCharacter.id);
        saveCharacter(remainingCharacters[0]);
        saveCharacters(remainingCharacters);
        setSelectedItem(null);
        return { success: true, message: 'Success: Character deleted.' };
      } catch {
        return { success: false, message: 'Error: Could not delete character.' };
      }
    }
    return { success: false, message: 'Error: No characters found in local storage.' };
  };

  // const exportCharacter = () => {

  // };

  // const importCharacter = () => {

  // };

  // const undoLastChange = () => {

  // };

  // const clearEquipment = () => {

  // };

  return {
    // clear: clearEquipment,
    character,
    characters,
    clone: cloneCharacter,
    create: createCharacter,
    // export: exportCharacter,
    // import: importCharacter,
    read: readCharacters,
    remove: deleteCharacter,
    saveCharacter,
    update: updateCharacter,
    // undo: undoLastChange,
  };
};

export default useCharacterManager;
