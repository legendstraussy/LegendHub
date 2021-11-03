import { atom, selector } from 'recoil';
// import { character } from './constants';

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

export const equipmentStat = selector({
  key: 'equipmentStat',
  default: null,
  get: ({ get }) => {
    const character = get(characterState);
    if (character) {
      const { equipment } = character;
      const list = Object
        .entries(equipment)
        .map(([slot, item]) => ({
          ...item,
          slot,
        }));
      return list;
    }
    return [];
  },
});

export const healthStatsState = selector({
  key: 'healthStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      const { hp, mv, ma } = selectedCharacter;
      return get(equipmentStat)
        .reduce((stats, item) => ({
          ...stats,
          hp: (item.hp) ? stats.hp + item.hp : stats.hp,
          mv: (item.mv) ? stats.mv + item.mv : stats.mv,
          ma: (item.ma) ? stats.ma + item.ma : stats.ma,
        }), { hp, mv, ma });
    }
    return { hp: 0, mv: 0, ma: 0 };
  },
});

export const mainStatsState = selector({
  key: 'mainStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      const {
        str, min, dex, con, per, spi,
      } = selectedCharacter?.baseStats;
      return get(equipmentStat)
        .reduce((stats, item) => ({
          ...stats,
          str: (item.str) ? stats.str + item.str : stats.str,
          min: (item.min) ? stats.min + item.min : stats.min,
          dex: (item.dex) ? stats.dex + item.dex : stats.dex,
          con: (item.con) ? stats.con + item.con : stats.con,
          per: (item.per) ? stats.per + item.per : stats.per,
          spi: (item.spi) ? stats.spi + item.spi : stats.spi,
        }), {
          str, min, dex, con, per, spi,
        });
    }
    return {
      str: 0, min: 0, dex: 0, con: 0, per: 0, spi: 0,
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
