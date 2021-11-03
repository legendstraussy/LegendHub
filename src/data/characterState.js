import { atom, selector } from 'recoil';
import { character } from './constants';

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
