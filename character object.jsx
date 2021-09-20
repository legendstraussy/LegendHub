const character = {
  name: 'Deacon',
  description: 'badass mage version',
  createDate: '8/16/2021 7:28pm',
  modifiedDate: '8/16/2021 7:28pm',
  exportHash: 'dsfaeffddsf7674f568dsfa5455s6adfds3a456fdsa7f3ds4a56fds34a56',
  hp: 624,
  mv: 658,
  ma: 902,
  ac: -117,
  align: 'GNE',
  rent: 53274,
  equipment: {
    light: 102,
    finger1: 102,
    finger2: 102,
    neck1: 102,
    neck2: 102,
    body: 102,
    head: 102,
    face: 102,
    legs: 102,
    feet: 102,
    hands: 102,
    arms: 102,
    about: 102,
    waist: 102,
    wrist1: 102,
    wrist2: 102,
    wield: 102,
    hold1: 102,
    hold2: 102,
    ear1: 102,
    ear2: 102,
    arm: 102,
    aux: 102,
    amulet: 102,
  },
  affects: [
    { id: 202 }, // spells
    { id: 203 },
    { id: 303 }, // potions
    { id: 312 },
  ],
  baseStats: {
    str: 19,
    min: 113,
    dex: 60,
    con: 72,
    per: 40,
    spi: 43,
  },
  capStats: {
    strCap: 0,
    minCap: 13,
    dexCap: 0,
    conCap: 0,
    perCap: 0,
    spiCap: 0,
  },
  regenStats: {
    hpRegen: 5,
    mvRegen: 3,
    maRegen: 30,
  },
  spellStats: {
    spellCrit: 72,
    spellDam: 85,
    spellRedux: 47,
    concentration: 35,
    spellFail: 0,
  },
  meleeStats: {
    hitroll: -12,
    damroll: -22,
    mitigation: 2,
    parry: 0,
    damcap: 0,
  },
  rangeStats: {
    accuracy: 0,
  },
  abilities: [
    { id: 403 },
    { id: 412 },
    { id: 417 },
    { id: 414 },
  ],
  skills: [
    { id: 502 },
  ],
  quests: [
    { id: 602 },
    { id: 604 },
    { id: 603 },
    { id: 606 },
  ],
  resistances: [
    { id: 702 },
  ],
  immunities: [
    { id: 802 },
  ],
  susceptibilities: [
    { id: 902 },
  ],
};

export default character;

/*
const hashids = new Hashids();
const s = hashids.encode(1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 60, 1, 2, 3, 0, 0, 0, 1, 2, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004)
const o = { name: 'deacon', version: 'badass mage version', s}
console.log('bingo', `${o.name}-${o.version}-${s}`);
console.log('bango', hashids.decode(s))
*/
