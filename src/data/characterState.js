import { atom, selector } from 'recoil';
import { configureCalcAlign } from 'utils/utilFns';

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

export const itemDetailState = selector({
  key: 'itemDetailState',
  default: null,
  get: ({ get }) => {
    const item = get(selectedItemState);
    if (item) {
      return {
        id: item.id,
        short: item.short,
        long: item.long,
        ac: item.ac,
        rent: item.rent,
        weight: item.weight,
        material: item.material,
        price: item.price,
        timer: item.timer,
        slots: item.slots,
        stats: [
          { name: 'str', value: item.str },
          { name: 'min', value: item.min },
          { name: 'dex', value: item.dex },
          { name: 'con', value: item.con },
          { name: 'per', value: item.per },
          { name: 'spi', value: item.spi },
          { name: 'str cap', value: item.strCap },
          { name: 'min cap', value: item.minCap },
          { name: 'dex cap', value: item.dexCap },
          { name: 'con cap', value: item.conCap },
          { name: 'per cap', value: item.perCap },
          { name: 'spi cap', value: item.spiCap },
          { name: 'damroll', value: item.damroll },
          { name: 'hitroll', value: item.hitroll },
          { name: 'mit', value: item.mitigation },
          { name: 'parry', value: item.parry },
          { name: 'accuracy', value: item.accuracy },
          { name: 'sp. dam', value: item.spellDam },
          { name: 'sp. crit', value: item.spellCrit },
          { name: 'sp. redux', value: item.spellRedux },
          { name: 'concent', value: item.concentration },
          { name: 'hp', value: item.hp },
          { name: 'mv', value: item.mv },
          { name: 'ma', value: item.ma },
          { name: 'hp regen', value: item.hpRegen },
          { name: 'mv regen', value: item.mvRegen },
          { name: 'ma regen', value: item.maRegen },
        ].filter(stat => stat.value),
        flags: [
          { name: 'bonded', value: item.isBonded },
          { name: 'heroic', value: item.isHeroic },
          { name: 'light', value: item.isLight },
          { name: 'limited', value: item.isLimited },
          { name: 'soulbound', value: item.isSoulbound },
          { name: 'two handed', value: item.isTwoHanded },
          { name: 'unique', value: item.isUnique },
        ].filter(flag => flag.value),
      };
    }
    return null;
  },
});

export const equipmentState = selector({
  key: 'equipmentState',
  default: null,
  get: ({ get }) => {
    const character = get(characterState);
    if (character) {
      const { equipment } = character;
      if (equipment) {
        return Object
          .values(equipment)
          .map((eq) => ({
            ...eq.item,
            slot: eq.slot,
          }));
      }
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
      return get(equipmentState)
        .reduce((stats, item) => ({
          ...stats,
          hp: (item.hp) ? stats.hp + item.hp : stats.hp,
          mv: (item.mv) ? stats.mv + item.mv : stats.mv,
          ma: (item.ma) ? stats.ma + item.ma : stats.ma,
          hpRaw: (item.hp) ? stats.hpRaw + item.hp : stats.hpRaw,
          mvRaw: (item.mv) ? stats.mvRaw + item.mv : stats.mvRaw,
          maRaw: (item.ma) ? stats.maRaw + item.ma : stats.maRaw,
        }), {
          hp, mv, ma, hpRaw: 0, mvRaw: 0, maRaw: 0,
        });
    }
    return { hp: 231, mv: 346, ma: 296 };
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
      return get(equipmentState)
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

export const genericStatsState = selector({
  key: 'genericStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      const { ac, align, rent } = selectedCharacter;
      const calcAlign = configureCalcAlign(align);

      return get(equipmentState)
        .reduce((stats, item) => ({
          ...stats,
          ac: (item.ac) ? stats.ac + item.ac : stats.ac,
          align: (item.align) ? calcAlign(item.align) : stats.align,
          rent: (item.rent) ? stats.rent + item.rent : stats.rent,
        }), { ac, align, rent });
    }
    return { ac: 0, align: 'GNE', rent: 0 };
  },
});

export const meleeStatsState = selector({
  key: 'meleeStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      const {
        hitroll, damroll, mitigation, parry,
      } = selectedCharacter?.meleeStats;
      return get(equipmentState)
        .reduce((stats, item) => ({
          ...stats,
          hitroll: (item.hitroll) ? stats.hitroll + item.hitroll : stats.hitroll,
          damroll: (item.damroll) ? stats.damroll + item.damroll : stats.damroll,
          mitigation: (item.mitigation) ? stats.mitigation + item.mitigation : stats.mitigation,
          parry: (item.parry) ? stats.parry + item.parry : stats.parry,
        }), {
          hitroll, damroll, mitigation, parry,
        });
    }
    return {
      hitroll: 0, damroll: 0, mitigation: 0, parry: 0,
    };
  },
});

export const spellStatsState = selector({
  key: 'spellStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      const {
        spellDam, spellCrit, spellRedux, concentration,
      } = selectedCharacter?.spellStats;
      return get(equipmentState)
        .reduce((stats, item) => ({
          ...stats,
          spellDam: (item.spellDam) ? stats.spellDam + item.spellDam : stats.spellDam,
          spellCrit: (item.spellCrit) ? stats.spellCrit + item.spellCrit : stats.spellCrit,
          spellRedux: (item.spellRedux) ? stats.spellRedux + item.spellRedux : stats.spellRedux,
          concentration: (item.concentration) ? stats.concentration + item.concentration : stats.concentration,
        }), {
          spellDam, spellCrit, spellRedux, concentration,
        });
    }
    return {
      spellDam: 0, spellCrit: 0, spellRedux: 0, concentration: 0,
    };
  },
});

export const rangeStatsState = selector({
  key: 'rangeStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      const { accuracy } = selectedCharacter?.rangeStats;
      return get(equipmentState)
        .reduce((stats, item) => ({
          ...stats,
          accuracy: (item.accuracy) ? stats.accuracy + item.accuracy : stats.accuracy,
        }), { accuracy });
    }
    return { accuracy: 0 };
  },
});

export const regenStatsState = selector({
  key: 'regenStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      const { hpRegen, mvRegen, maRegen } = selectedCharacter?.regenStats;
      return get(equipmentState)
        .reduce((stats, item) => ({
          ...stats,
          hpRegen: (item.hpRegen) ? stats.hpRegen + item.hpRegen : stats.hpRegen,
          mvRegen: (item.mvRegen) ? stats.mvRegen + item.mvRegen : stats.mvRegen,
          maRegen: (item.maRegen) ? stats.maRegen + item.maRegen : stats.maRegen,
        }), { hpRegen, mvRegen, maRegen });
    }
    return { hpRegen: 0, mvRegen: 0, maRegen: 0 };
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

export const selectedTabState = atom({
  key: 'selectedTabState',
  default: null,
});
