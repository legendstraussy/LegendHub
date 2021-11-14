import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  characterState,
  charactersState,
  selectedItemState,
  selectedTabState,
} from 'data/characterState';
import { v4 as uuidv4 } from 'uuid';
import { character as characterModel, tabKeys } from 'data/constants';
import { capitalize, getAdjustedHistory } from 'utils/utilFns';
import useLocalStorage from './useLocalStorage';

const useCharacterManager = () => {
  const { getStorage, setStorage } = useLocalStorage();
  const [characters, setCharacters] = useRecoilState(charactersState);
  const [character, setCharacter] = useRecoilState(characterState);
  const setSelectedItem = useSetRecoilState(selectedItemState);
  const setActiveTab = useSetRecoilState(selectedTabState);

  const saveCharacter = useCallback(newCharacter => {
    if (newCharacter) {
      if (characters.find(c => c.name.toLowerCase() === newCharacter.name.toLowerCase()
        && c.version === newCharacter.version
        && c.id !== newCharacter.id)) throw Error('Character name and/or version already exists.');
      if (!newCharacter.name) throw Error('Please provide a character name.');
      if (!newCharacter.version) throw Error('Please provide a character version (ex. \'60 dex con fighter\')');
      if (newCharacter?.name?.length > 13) throw Error('Error: Character name contains too many characters.');
      setStorage('character', newCharacter);
    } else {
      setStorage('character', null);
    }
    setCharacter(newCharacter);
  }, [characters, setCharacter, setStorage]);

  const saveCharacters = useCallback(newCharacters => {
    try {
      setStorage('characters', newCharacters?.length ? newCharacters : null);
      setCharacters(newCharacters);
      return true;
    } catch {
      throw Error('Could not save characters to local storage.');
    }
  }, [setCharacters, setStorage]);

  const save = (character, characters) => {
    try {
      saveCharacter(character);
      saveCharacters(characters);
    } catch (e) {
      throw Error(e.message);
    }
  };

  const discard = () => {
    try {
      const remainingCharacters = characters.filter(c => c.id !== character.id);
      save(null, remainingCharacters);
      setCharacter(remainingCharacters[0]);
      return { success: true, message: 'Success: Character deleted.' };
    } catch (e) {
      if (e) return { success: false, message: `Error: ${e.message}` };
      return { success: false, message: 'Error: Could not delete character.' };
    }
  };

  const create = (name, version) => {
    const newCharacter = {
      ...characterModel, id: uuidv4(), name: capitalize(name), version,
    };
    let updatedCharacters = [newCharacter];
    if (characters?.find(c => c.name.toLowerCase() === name && c.version === version)) {
      return { success: false, message: 'Error: Character name and/or version already exists.' };
    }
    updatedCharacters = [...characters, newCharacter];
    try {
      save(newCharacter, updatedCharacters);
      setActiveTab(tabKeys.CHARACTER);
      return { success: true, message: 'Success: Character created.' };
    } catch (e) {
      if (e) return { success: false, message: `Error: ${e.message}` };
      return { success: false, message: 'Error: Could not create character.' };
    }
  };

  const update = newCharacter => {
    try {
      const updatedCharacter = { ...character, ...newCharacter };
      const remainingCharacters = characters.filter(storedCharacter => storedCharacter?.id !== updatedCharacter.id);
      const updatedCharacters = [...remainingCharacters, updatedCharacter];
      save(updatedCharacter, updatedCharacters);
      return { success: true, message: 'Success: Character has been updated.' };
    } catch (e) {
      if (e) return { success: false, message: `Error: ${e.message}` };
      return { success: false, message: 'Error: Could not update character.' };
    }
  };

  const clone = ({ name, version }) => {
    try {
      const clonedCharacter = {
        ...characterModel, equipment: character?.equipment, id: uuidv4(), name: capitalize(name), version,
      };
      const updatedCharacters = [...characters, clonedCharacter];
      save(clonedCharacter, updatedCharacters);
      return { success: true, message: 'Success: Character cloned.' };
    } catch (e) {
      if (e) return { success: false, message: `Error: ${e.message}` };
      return { success: false, message: 'Error: Could not clone character.' };
    }
  };

  const read = () => {
    const storedCharacters = getStorage('characters');
    const storedCharacter = getStorage('character');
    if (!storedCharacter && !storedCharacters) return;
    if (storedCharacter || !storedCharacters) {
      setCharacter(storedCharacter);
      setCharacters([storedCharacter]);
    }
  };
  // **********************************************************************
  // **********************************************************************
  // TODO: clean up functions BELOW. Should be a few that can do everything





  // const export = () => {

  // };

  // const import = () => {

  // };

  const undo = () => {
    const storedCharacters = getStorage('characters');
    const { history } = character;
    if (!history.length) return { success: false, message: 'Error: No character history found.' };
    const updatedCharacter = {
      ...character,
      history: [
        ...history.slice(0, history.length - 1),
      ],
      equipment: history[history.length - 1],
    };
    const remainingCharacters = storedCharacters
      .filter(storedCharacter => storedCharacter?.id !== updatedCharacter.id);
    const updatedCharacters = [...remainingCharacters, updatedCharacter];

    try {
      saveCharacters(updatedCharacters);
      saveCharacter(updatedCharacter);
      return { success: true, message: 'Success: Character equipment cleared.' };
    } catch {
      return { success: false, message: 'Error: Could not save character to local storage.' };
    }
  };

  const clear = () => {
    const storedCharacters = getStorage('characters');
    const { equipment, history } = character;
    const adjustedHistory = getAdjustedHistory(history);
    const updatedCharacter = {
      ...character,
      history: [
        ...adjustedHistory,
        equipment,
      ],
      equipment: {
        light: {
          slot: 'light',
          item: null,
        },
        finger1: {
          slot: 'finger',
          item: null,
        },
        finger2: {
          slot: 'finger',
          item: null,
        },
        neck1: {
          slot: 'neck',
          item: null,
        },
        neck2: {
          slot: 'neck',
          item: null,
        },
        body: {
          slot: 'body',
          item: null,
        },
        head: {
          slot: 'head',
          item: null,
        },
        face: {
          slot: 'face',
          item: null,
        },
        legs: {
          slot: 'legs',
          item: null,
        },
        feet: {
          slot: 'feet',
          item: null,
        },
        hands: {
          slot: 'hands',
          item: null,
        },
        arms: {
          slot: 'arms',
          item: null,
        },
        waist: {
          slot: 'waist',
          item: null,
        },
        wrist1: {
          slot: 'wrist',
          item: null,
        },
        wrist2: {
          slot: 'wrist',
          item: null,
        },
        weapon: {
          slot: 'weapon',
          item: null,
        },
        held1: {
          slot: 'held',
          item: null,
        },
        held2: {
          slot: 'held',
          item: null,
        },
        ear1: {
          slot: 'ear',
          item: null,
        },
        ear2: {
          slot: 'ear',
          item: null,
        },
        arm: {
          slot: 'arm',
          item: null,
        },
        amulet: {
          slot: 'amulet',
          item: null,
        },
        aux: {
          slot: 'aux',
          item: null,
        },
      },
    };
    const remainingCharacters = storedCharacters
      .filter(storedCharacter => storedCharacter?.id !== updatedCharacter.id);
    const updatedCharacters = [...remainingCharacters, updatedCharacter];

    try {
      saveCharacters(updatedCharacters);
      saveCharacter(updatedCharacter);
      return { success: true, message: 'Success: Character equipment cleared.' };
    } catch {
      return { success: false, message: 'Error: Could not save character to local storage.' };
    }
  };

  const unequip = item => {
    const storedCharacters = getStorage('characters');
    const { equipment, history } = character;
    const adjustedHistory = getAdjustedHistory(history);
    const updatedCharacter = {
      ...character,
      history: [
        ...adjustedHistory,
        equipment,
      ],
      equipment: {
        ...equipment,
        [item.slot]: {
          slot: item.slot,
          item: null,
        },
      },
    };
    const remainingCharacters = storedCharacters
      .filter(storedCharacter => storedCharacter?.id !== updatedCharacter.id);
    const updatedCharacters = [...remainingCharacters, updatedCharacter];

    try {
      saveCharacters(updatedCharacters);
      saveCharacter(updatedCharacter);
      return { success: true, message: 'Success: Character equipment cleared.' };
    } catch {
      return { success: false, message: 'Error: Could not save character to local storage.' };
    }
  };

  const updateStat = (stat, value) => {
    const storedCharacters = getStorage('characters');
    if (!character) return null;
    const updatedCharacter = {
      ...character,
      baseStats: {
        ...character.baseStats,
        [stat]: value,
      },
    };
    const remainingCharacters = storedCharacters
      .filter(storedCharacter => storedCharacter?.id !== updatedCharacter.id);
    const updatedCharacters = [...remainingCharacters, updatedCharacter];

    try {
      saveCharacters(updatedCharacters);
      saveCharacter(updatedCharacter);
      return { success: true, message: 'Success: Character stat modified.' };
    } catch {
      return { success: false, message: 'Error: Could not save character to local storage.' };
    }
  };

  return {
    clear,
    clone,
    create,
    discard,
    // export,
    // import,
    read,
    unequip,
    saveCharacter,
    update,
    updateStat,
    undo,
  };
};

export default useCharacterManager;
