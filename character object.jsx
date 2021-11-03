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
<<<<<<< HEAD
=======
    light: { slot: 'light', item: {} },
    finger1: { slot: 'finger', item: {} },
    finger2: { slot: 'finger', item: {} },
    neck1: { slot: 'neck', item: {} },
    neck2: { slot: 'neck', item: {} },
    body: { slot: 'body', item: {} },
    head: { slot: 'head', item: {} },
    face: { slot: 'face', item: {} },
    legs: { slot: 'legs', item: {} },
    feet: { slot: 'feet', item: {} },
    hands: { slot: 'hands', item: {} },
    arms: { slot: 'arms', item: {} },
    about: { slot: 'about', item: {} },
    waist: { slot: 'waist', item: {} },
    wrist1: { slot: 'wrist', item: {} },
    wrist2: { slot: 'wrist', item: {} },
    weapon: { slot: 'weapon', item: {} },
    held: { slot: 'held', item: {} },
    held2: { slot: 'held', item: {} },
    ear1: { slot: 'ear', item: {} },
    ear2: { slot: 'ear', item: {} },
    arm: { slot: 'arm', item: {} },
    amulet: { slot: 'amulet', item: {} },
    aux: { slot: 'aux', item: {} },
>>>>>>> 7c9885a2546f3028b29b00d6c2954d49f91479b1
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
  quests: {
    ten: 0,
    fiveThree: 0,
  },
  affects: [
  ],
  abilities: [
  ],
  skills: [
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
