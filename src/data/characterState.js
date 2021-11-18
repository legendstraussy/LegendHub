import { atom, selector } from 'recoil';
import { configureCalcAlign } from 'utils/utilFns';
import { CHAR_DETAIL_KEYS, defaultStats, tenQuest, fiveThreeQuest, hpQuest, maQuest, threeAllQuest } from 'data/constants';

export const charactersState = atom({
  key: 'charactersState',
  default: [],
});

export const characterState = atom({
  key: 'characterState',
  default: null,
});

export const characterDetailState = atom({
  key: 'characterDetailState',
  default: CHAR_DETAIL_KEYS.STATS,
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
    return {};
  },
});

export const equipmentState = selector({
  key: 'equipmentState',
  default: null,
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      const { equipment } = selectedCharacter;
      if (equipment) {
        return Object
          .keys(equipment)
          .map((slot) => ({
            ...equipment[slot].item,
            slot,
          }));
      }
    }
    return [];
  },
});

export const rawStatsState = selector({
  key: 'rawStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      return {
        ...selectedCharacter.baseStats,
        hp: selectedCharacter.hp,
        mv: selectedCharacter.mv,
        ma: selectedCharacter.ma,
        ac: selectedCharacter.ac,
        align: selectedCharacter.align,
        rent: selectedCharacter.rent,
      };
    }
    return defaultStats;
  },
});

export const swapStatsState = selector({
  key: 'swapStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      return selectedCharacter.swapStats;
    }
    return { str: 0, min: 0, dex: 0, con: 0, per: 0, spi: 0 };
  },
});

export const questStatsState = selector({
  key: 'questStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      const { quests } = selectedCharacter;
      return {
        str: (tenQuest[quests?.ten]?.str ?? 0)
          + (fiveThreeQuest[quests?.fiveThree]?.str ?? 0)
          + (quests.threeAll ? threeAllQuest?.str : 0),
        min: (tenQuest[quests?.ten]?.min ?? 0)
          + (fiveThreeQuest[quests?.fiveThree]?.min ?? 0)
          + (quests.threeAll ? threeAllQuest?.min : 0),
        dex: (tenQuest[quests?.ten]?.dex ?? 0)
          + (fiveThreeQuest[quests?.fiveThree]?.dex ?? 0)
          + (quests.threeAll ? threeAllQuest?.dex : 0),
        con: (tenQuest[quests?.ten]?.con ?? 0)
          + (fiveThreeQuest[quests?.fiveThree]?.con ?? 0)
          + (quests.threeAll ? threeAllQuest?.con : 0),
        per: (tenQuest[quests?.ten]?.per ?? 0)
          + (fiveThreeQuest[quests?.fiveThree]?.per ?? 0)
          + (quests.threeAll ? threeAllQuest?.per : 0),
        spi: (tenQuest[quests?.ten]?.spi ?? 0)
          + (fiveThreeQuest[quests?.fiveThree]?.spi ?? 0)
          + (quests.threeAll ? threeAllQuest?.spi : 0),
        hp: quests.hp ? hpQuest.hp : 0,
        ma: quests.mv ? maQuest.ma : 0,
      };
    }
    return defaultStats;
  },
});

export const uneqStatsState = selector({
  key: 'uneqStatsState',
  get: ({ get }) => {
    const rawStats = get(rawStatsState);
    const swapStats = get(swapStatsState);
    const questStats = get(questStatsState);
    return {
      str: rawStats.str + swapStats.str + questStats.str,
      min: rawStats.min + swapStats.min + questStats.min,
      dex: rawStats.dex + swapStats.dex + questStats.dex,
      con: rawStats.con + swapStats.con + questStats.con,
      per: rawStats.per + swapStats.per + questStats.per,
      spi: rawStats.spi + swapStats.spi + questStats.spi,
      hp: rawStats.hp + questStats.hp,
      mv: rawStats.mv,
      ma: rawStats.ma + questStats.ma,
      ac: rawStats.ac,
      align: rawStats.align,
      rent: rawStats.rent,
    };
  },
});

export const finalStatsState = selector({
  key: 'finalStatsState',
  get: ({ get }) => {
    const uneqStats = get(uneqStatsState);
    const calcAlign = configureCalcAlign(uneqStats.align);
    return get(equipmentState)
      .reduce((stats, equipment) => ({
        str: stats.str + (equipment?.str || 0),
        min: stats.min + (equipment?.min || 0),
        dex: stats.dex + (equipment?.dex || 0),
        con: stats.con + (equipment?.con || 0),
        per: stats.per + (equipment?.per || 0),
        spi: stats.spi + (equipment?.spi || 0),
        hp: stats.hp + (equipment?.hp || 0),
        mv: stats.mv + (equipment?.mv || 0),
        ma: stats.ma + (equipment?.ma || 0),
        ac: stats.ac + (equipment?.ac || 0),
        align: (equipment.align) ? calcAlign(equipment.align) : stats.align,
        rent: stats.rent + (equipment?.rent || 0),
      }), uneqStats);
  },
});

export const equipmentStatsState = selector({
  key: 'equipmentStatsState',
  get: ({ get }) => get(equipmentState)
    .reduce((stats, equipment) => ({
      str: stats.min + (equipment?.str || 0),
      min: stats.min + (equipment?.min || 0),
      dex: stats.dex + (equipment?.dex || 0),
      con: stats.con + (equipment?.con || 0),
      per: stats.per + (equipment?.per || 0),
      spi: stats.spi + (equipment?.spi || 0),
      hp: stats.hp + (equipment?.hp || 0),
      mv: stats.mv + (equipment?.mv || 0),
      ma: stats.ma + (equipment?.ma || 0),
      ac: stats.ac + (equipment?.ac || 0),
      rent: stats.rent + (equipment?.rent || 0),
    }), defaultStats),
});

export const statsState = selector({
  key: 'statsState',
  get: ({ get }) => {
    const rawStats = get(rawStatsState);
    const swapStats = get(swapStatsState);
    const uneqStats = get(uneqStatsState);
    const finalStats = get(finalStatsState);
    return {
      str: {
        raw: rawStats.str,
        swap: swapStats.str,
        uneq: uneqStats.str,
        final: finalStats.str,
      },
      min: {
        raw: rawStats.min,
        swap: swapStats.min,
        uneq: uneqStats.min,
        final: finalStats.min,
      },
      dex: {
        raw: rawStats.dex,
        swap: swapStats.dex,
        uneq: uneqStats.dex,
        final: finalStats.dex,
      },
      con: {
        raw: rawStats.con,
        swap: swapStats.con,
        uneq: uneqStats.con,
        final: finalStats.con,
      },
      per: {
        raw: rawStats.per,
        swap: swapStats.per,
        uneq: uneqStats.per,
        final: finalStats.per,
      },
      spi: {
        raw: rawStats.spi,
        swap: swapStats.spi,
        uneq: uneqStats.spi,
        final: finalStats.spi,
      },
    };
  },
});

export const meleeStatsState = selector({
  key: 'meleeStatsState',
  get: ({ get }) => {
    const selectedCharacter = get(characterState);
    if (selectedCharacter) {
      const { hitroll, damroll, mitigation, parry } = selectedCharacter?.meleeStats;
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
      const { spellDam, spellCrit, spellRedux, concentration } = selectedCharacter?.spellStats;
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

export const slotState = selector({
  key: 'slotState',
  get: ({ get }) => {
    const { equipment } = get(equipmentState);
    return {
      used: 0,
      total: 1,
    };
  },
});

export const questModifiersState = selector({
  key: 'questModifiersState',
  get: ({ get }) => {
    const character = get(characterState);
    if (character) return character.quests;
    return { };
  },
});

export const questModiferOptionsState = selector({
  key: 'questModiferOptionsState',
  get: () => ({
    ten: Object.keys(tenQuest).map(name => ({ name, value: name })),
    fiveThree: Object.keys(fiveThreeQuest).map(name => ({ name, value: name })),
  }),
});

export const selectedTabState = atom({
  key: 'selectedTabState',
  default: null,
});
