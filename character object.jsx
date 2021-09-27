const character = {
  name: '',
  description: '',
  createDate: '',
  modifiedDate: '',
  exportHash: '',
  history: [],
  hp: 0,
  mv: 0,
  ma: 0,
  ac: 0,
  align: 'GNE',
  rent: 0,
  equipment: {
  },
  baseStats: {
    str: 0,
    min: 0,
    dex: 0,
    con: 0,
    per: 0,
    spi: 0,
  },
  capStats: {
    strCap: 0,
    minCap: 0,
    dexCap: 0,
    conCap: 0,
    perCap: 0,
    spiCap: 0,
  },
  regenStats: {
    hpRegen: 0,
    mvRegen: 0,
    maRegen: 0,
  },
  spellStats: {
    spellCrit: 0,
    spellDam: 0,
    spellRedux: 0,
    concentration: 0,
    spellFail: 0,
  },
  meleeStats: {
    hitroll: 0,
    damroll: 0,
    mitigation: 0,
    parry: 0,
    damcap: 0,
  },
  rangeStats: {
    accuracy: 0,
  },
  affects: [
  ],
  abilities: [
  ],
  skills: [
  ],
  quests: [
  ],
  resistances: [
  ],
  immunities: [
  ],
  susceptibilities: [
  ],
};

const characters = [
  { ...character },
];

export {
  character,
  characters,
};

/*
const hashids = new Hashids();
const s = hashids.encode(1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 60, 1, 2, 3, 0, 0, 0, 1, 2, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004)
const o = { name: 'deacon', version: 'badass mage version', s}
console.log('bingo', `${o.name}-${o.version}-${s}`);
console.log('bango', hashids.decode(s))
*/
