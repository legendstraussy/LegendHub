import { atom, selector } from 'recoil';
import { character, item } from './constants';

export const charactersState = atom({
  key: 'charactersState',
  default: [],
});

export const characterState = atom({
  key: 'characterState',
  default: null,
});

export const selectedItemState = atom({
  key: 'selectedItemState',
  default: null,
});

export const characterEqState = selector({
  key: 'characterEqState',
  get: ({ get }) => {
    const character = get(characterState);
    if (character) {
      return Object
        .keys(character?.equipment)
        .reduce((gear, key) => {
          let newItem = character?.equipment[key]?.item;
          if (newItem?.id === 1001) {
            newItem = {
              ...newItem,
              name: 'Ring of Strength',
              rent: 3232,
              price: 1000,
              material: 'leather',
              timer: -1,
              slots: [{ name: 'light' }, { name: 'held' }],
              str: Math.floor(Math.random() * 5) + 1,
              min: Math.floor(Math.random() * 5) + 1,
              dex: Math.floor(Math.random() * 5) + 1,
              con: Math.floor(Math.random() * 5) + 1,
              mvRegen: Math.floor(Math.random() * 5) + 1,
            };
          }
          return [
            ...gear,
            {
              ...item,
              ...newItem,
              slot: character?.equipment[key]?.slot,
            },
          ];
        }, []);
    }
    return [];
  },
});

export const characterStatsState = selector({
  key: 'characterStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      const {
        hp,
        mv,
        ma,
        ac,
        align,
        rent,
        baseStats,
      } = selectedCharacter;
      return {
        hp,
        mv,
        ma,
        ac,
        align,
        rent,
        baseStats,
      };
    }
    return character;
  },
});

export const characterNamesState = selector({
  key: 'characterNamesState',
  get: ({ get }) => {
    const characters = get(charactersState);
    return characters.map(({ name }) => ({
      name,
    }));
  },
});
