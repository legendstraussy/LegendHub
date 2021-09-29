import theme from 'utils/theme';

export const character = {
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

export const stats = {
  str: {
    name: 'strength',
    color: theme.palette.main.red,
  },
  min: {
    name: 'mind',
    color: theme.palette.main.purple,
  },
  dex: {
    name: 'dexterity',
    color: theme.palette.main.blue,
  },
  con: {
    name: 'constitution',
    color: theme.palette.main.yellow,
  },
  per: {
    name: 'perception',
    color: theme.palette.main.cyan,
  },
  spi: {
    name: 'spirit',
    color: theme.palette.main.green,
  },
};

export const modifierColors = {
  potion: {
    bgColor: theme.palette.main.green,
    color: theme.palette.contrastText.green,
  },
  spell: {
    bgColor: theme.palette.main.purple,
    color: theme.palette.contrastText.purple,
  },
  skill: {
    bgColor: theme.palette.main.yellow,
    color: theme.palette.contrastText.yellow,
  },
  ability: {
    bgColor: theme.palette.main.blue,
    color: theme.palette.contrastText.blue,
  },
  resistance: {
    bgColor: theme.palette.main.blue,
    color: theme.palette.contrastText.blue,
  },
  immunity: {
    bgColor: theme.palette.main.yellow,
    color: theme.palette.contrastText.yellow,
  },
  susceptibility: {
    bgColor: theme.palette.main.red,
    color: theme.palette.contrastText.red,
  },
};

export const fiveThreeQuests = [
  {
    name: 'bear',
    modifers: [
      { stat: stats.spi, delta: 5 },
      { stat: stats.min, delta: 3 },
    ],
  },
  {
    name: 'beaver',
    modifers: [
      { stat: stats.min, delta: 5 },
      { stat: stats.dex, delta: 3 },
    ],
  },
  {
    name: 'eagle',
    modifers: [
      { stat: stats.per, delta: 5 },
      { stat: stats.str, delta: 3 },
    ],
  },
  {
    name: 'moose',
    modifers: [
      { stat: stats.str, delta: 5 },
      { stat: stats.con, delta: 3 },
    ],
  },
  {
    name: 'snake',
    modifers: [
      { stat: stats.dex, delta: 5 },
      { stat: stats.per, delta: 3 },
    ],
  },
  {
    name: 'turtle',
    modifers: [
      { stat: stats.con, delta: 5 },
      { stat: stats.spi, delta: 3 },
    ],
  },
  {
    name: 'dragon',
    modifers: [
      { stat: stats.dex, delta: 5 },
      { stat: stats.con, delta: 3 },
    ],
  },
  {
    name: 'hydra',
    modifers: [
      { stat: stats.per, delta: 5 },
      { stat: stats.dex, delta: 3 },
    ],
  },
  {
    name: 'wyvern',
    modifers: [
      { stat: stats.min, delta: 5 },
      { stat: stats.spi, delta: 3 },
    ],
  },
];

export const itemFilters = [
  { name: 'heroic' },
  { name: 'limited' },
  { name: 'soulbound' },
  { name: 'unique' },
];

export const slots = [
  { name: 'light' },
  { name: 'finger' },
  { name: 'neck' },
  { name: 'body' },
  { name: 'head' },
  { name: 'hands' },
  { name: 'feet' },
  { name: 'face' },
  { name: 'arms' },
  { name: 'legs' },
  { name: 'about' },
  { name: 'waist' },
  { name: 'wrist' },
  { name: 'wield' },
  { name: 'hold' },
  { name: 'ear' },
  { name: 'arm' },
  { name: 'amulet' },
  { name: 'aux' },
];

export const weaponTypes = [
  { name: 'bladed' },
  { name: 'blunt' },
  { name: 'piercing' },
];

export const weaponStats = [
  { name: 'str' },
  { name: 'dex' },
  { name: 'con' },
];
