import { atom, selector } from 'recoil';
import { character } from './constants';

export const charactersState = atom({
  key: 'charactersState',
  default: [],
});

export const characterState = atom({
  key: 'characterState',
  default: character,
});

export const characterStatsState = selector({
  key: 'characterStatsState',
  get: ({ get }) => {
    const {
      hp,
      mv,
      ma,
      ac,
      align,
      rent,
      baseStats,
    } = get(characterState);
    return {
      hp,
      mv,
      ma,
      ac,
      align,
      rent,
      baseStats,
    };
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
