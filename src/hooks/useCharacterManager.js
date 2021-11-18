import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  characterState,
  charactersState,
  selectedItemState,
  selectedTabState,
} from 'data/characterState';
import { v4 as uuidv4 } from 'uuid';
import { character as characterModel, TAB_KEYS } from 'data/constants';
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
    const updatedCharacters = [
      ...characters,
      newCharacter,
    ];
    try {
      save(newCharacter, updatedCharacters);
      setActiveTab(TAB_KEYS.CHARACTER);
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

  const undo = () => {
    const { history } = character;
    try {
      if (update({
        ...character,
        history: [
          ...history.slice(0, history.length - 1),
        ],
        equipment: history[history.length - 1],
      })) {
        return { success: true, message: 'Success: Character history traveled.' };
      }
      throw Error;
    } catch (e) {
      if (e) return { success: false, message: `Error: ${e.message}` };
      return { success: false, message: 'Error: Could not undo character history.' };
    }
  };

  const clear = () => {
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
          ...equipment.light,
          item: null,
        },
        finger1: {
          ...equipment.finger1,
          item: null,
        },
        finger2: {
          ...equipment.finger2,
          item: null,
        },
        neck1: {
          ...equipment.neck1,
          item: null,
        },
        neck2: {
          ...equipment.neck2,
          item: null,
        },
        body: {
          ...equipment.body,
          item: null,
        },
        head: {
          ...equipment.head,
          item: null,
        },
        face: {
          ...equipment.face,
          item: null,
        },
        legs: {
          ...equipment.legs,
          item: null,
        },
        feet: {
          ...equipment.feet,
          item: null,
        },
        hands: {
          ...equipment.hands,
          item: null,
        },
        arms: {
          ...equipment.arms,
          item: null,
        },
        waist: {
          ...equipment.waist,
          item: null,
        },
        wrist1: {
          ...equipment.wrist1,
          item: null,
        },
        wrist2: {
          ...equipment.wrist2,
          item: null,
        },
        weapon: {
          ...equipment.weapon,
          item: null,
        },
        held1: {
          ...equipment.held1,
          item: null,
        },
        held2: {
          ...equipment.held2,
          item: null,
        },
        ear1: {
          ...equipment.ear1,
          item: null,
        },
        ear2: {
          ...equipment.ear2,
          item: null,
        },
        arm: {
          ...equipment.arm,
          item: null,
        },
        amulet: {
          ...equipment.amulet,
          item: null,
        },
        aux: {
          ...equipment.aux,
          item: null,
        },
      },
    };

    try {
      if (update(updatedCharacter)) {
        return { success: true, message: 'Success: Character equipment cleared.' };
      }
      throw Error;
    } catch (e) {
      if (e) return { success: false, message: `Error: ${e.message}` };
      return { success: false, message: 'Error: Could not clear character equipment.' };
    }
  };

  const unequip = item => {
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

    try {
      if (update(updatedCharacter)) {
        return { success: true, message: 'Success: Character equipment updated.' };
      }
      throw Error;
    } catch (e) {
      if (e) return { success: false, message: `Error: ${e.message}` };
      return { success: false, message: 'Error: Could not update character equipment.' };
    }
  };

  const updateStat = type => (stat, value) => {
    try {
      if (update({
        ...character,
        [type]: {
          ...character[type],
          [stat]: value,
        },
      })) {
        return { success: true, message: `Success: Character ${type} stats updated.` };
      }
      throw Error;
    } catch (e) {
      if (e) return { success: false, message: `Error: ${e.message}` };
      return { success: false, message: `Error: Could not update character ${type} stats.` };
    }
  };

  const updateQuest = type => quest => {
    try {
      if (update({
        ...character,
        quests: {
          ...character.quests,
          [type]: quest,
        },
      })) {
        return { success: true, message: `Success: Character ${type} quest updated.` };
      }
      throw Error;
    } catch (e) {
      if (e) return { success: false, message: `Error: ${e.message}` };
      return { success: false, message: `Error: Could not update character ${type} quest.` };
    }
  };

  // const export = () => {

  // };

  // const import = () => {

  // };

  return {
    clear,
    clone,
    create,
    discard,
    // export,
    // import,
    read,
    undo,
    unequip,
    update,
    updateStat,
    updateQuest,
  };
};

export default useCharacterManager;
