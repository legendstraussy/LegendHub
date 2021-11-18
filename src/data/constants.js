import theme from 'utils/theme';

export const NO_VALID_ALIGN = '---';
export const HISTORY_LENGTH = 10;
export const CHAR_DETAIL_KEYS = {
  FINAL: 'final',
  STATS: 'stat',
};
export const TEN_QUEST_MODIFIERS = {
  STRENGTH: 'strength',
  MIND: 'mind',
  DEXTERITY: 'dexterity',
  CONSTITUTION: 'constitution',
  PERCEPTION: 'perception',
  SPIRIT: 'spirit',
};
export const FIVE_THREE_QUEST_MODIFIERS = {
  BEAR: 'bear',
  BEAVER: 'beaver',
  EAGLE: 'eagle',
  MOOSE: 'moose',
  SNAKE: 'snake',
  TURTLE: 'turtle',
  DRAGON: 'dragon',
  HYDRA: 'hydra',
  WYVERN: 'wyvern',
};
export const STATS_SCHEMA = {
  STR: {
    name: 'strength',
    color: theme.palette.main.red,
  },
  MIN: {
    name: 'mind',
    color: theme.palette.main.purple,
  },
  DEX: {
    name: 'dexterity',
    color: theme.palette.main.blue,
  },
  CON: {
    name: 'constitution',
    color: theme.palette.main.yellow,
  },
  PER: {
    name: 'perception',
    color: theme.palette.main.cyan,
  },
  SPI: {
    name: 'spirit',
    color: theme.palette.main.green,
  },
};
export const QUESTS_TYPES = {
  FIVE_THREE: 'fiveThree',
  HP: 'hp',
  MANA: 'mana',
  SPIRIT: 'spirit',
  TEN: 'ten',
  THREE_ALL: 'threeAll',
};
export const STAT_TYPES = {
  BASE_STATS: 'baseStats',
  SWAP_STATS: 'swapStats',
};

export const TAB_KEYS = {
  ITEM: 'item',
  CHARACTER: 'character',
};

export const character = {
  id: null,
  name: '',
  version: '',
  createDate: '',
  modifiedDate: '',
  exportHash: '',
  history: [],
  hp: 231,
  mv: 346,
  ma: 296,
  ac: 0,
  align: 'GNE',
  rent: 0,
  equipment: {
    light: {
      slot: 'light',
      item: {
        slots: ['light', 'held'],
        id: 1001,
        ac: -7,
        timer: -1,
        short: 'light brite, outta sight!',
        long: 'It\'s a light brite!',
        material: 'leather',
        str: 6,
        min: 5,
        dex: 4,
        con: 3,
        per: 2,
        spi: 1,
        hp: 1,
        mv: 2,
        ma: 3,
        damroll: 1,
        hitroll: 2,
        mitigation: 3,
        parry: 4,
        accuracy: 1,
        spellDam: 1,
        spellCrit: 2,
        spellRedux: 3,
        concentration: 4,
        hpRegen: 1,
        mvRegen: 2,
        maRegen: 3,
        rent: 2300,
        weight: 0.1,
        price: 54500,
      },
    },
    finger1: {
      slot: 'finger',
      item: {
        slots: ['finger'],
        id: 1023,
        short: 'ring of might',
        hp: 1,
        ma: 3,
        con: 3,
        per: -2,
        rent: 1700,
      },
    },
    finger2: {
      slot: 'finger',
      item: {
        slots: ['finger'], id: 1023, short: 'ring of might', align: 'GE', hp: 1, ac: -6, ma: 3, con: 3, rent: 1700,
      },
    },
    neck1: {
      slot: 'neck',
      item: {
        slots: ['neck'],
        dexCap: 4,
        id: 1023,
        short: 'neckguard of the gods',
        long: 'Behold, the glorious neckguard of the gods.',
        align: 'GNE',
        hp: 1,
        ac: -6,
        ma: 3,
        con: 3,
        rent: 1700,
        price: 2200,
        weight: 2,
        material: 'bronze',
        timer: 450,
        isHeroic: true,
        isSoulbound: true,
      },
    },
    neck2: {
      slot: 'neck',
      item: {
        slots: ['neck'], id: 1023, short: 'ring of might', align: 'N', ac: -8, ma: 3, con: 3, rent: 1700,
      },
    },
    body: {
      slot: 'body',
      item: {
        slots: ['body'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    head: {
      slot: 'head',
      item: {
        slots: ['head'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    face: {
      slot: 'face',
      item: {
        slots: ['face'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    legs: {
      slot: 'legs',
      item: {
        slots: ['legs'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    feet: {
      slot: 'feet',
      item: {
        slots: ['feet'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    hands: {
      slot: 'hands',
      item: {
        slots: ['hands'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    arms: {
      slot: 'arms',
      item: {
        slots: ['arms'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    waist: {
      slot: 'waist',
      item: {
        slots: ['waist'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    wrist1: {
      slot: 'wrist',
      item: {
        slots: ['wrist'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    wrist2: {
      slot: 'wrist',
      item: {
        slots: ['wrist'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    weapon: {
      slot: 'weapon',
      item: {
        slots: ['weapon'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    held1: {
      slot: 'held',
      item: {
        slots: ['held'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    held2: {
      slot: 'held',
      item: {
        slots: ['held'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    ear1: {
      slot: 'ear',
      item: {
        slots: ['ear'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    ear2: {
      slot: 'ear',
      item: {
        slots: ['ear'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    arm: {
      slot: 'arm',
      item: {
        slots: ['arm'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    amulet: {
      slot: 'amulet',
      item: {
        slots: ['amulet'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
    aux: {
      slot: 'aux',
      item: {
        slots: ['aux'], id: 1023, short: 'ring of might', ma: 3, con: 3, rent: 1700,
      },
    },
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
    ten: null,
    fiveThree: null,
    threeAll: true,
    hp: true,
    mana: true,
    spirit: true,
  },
  swapStats: {
    str: 0,
    min: 0,
    dex: 0,
    con: 0,
    per: 0,
    spi: 0,
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

export const item = {
  ac: null,
  accuracy: null,
  align: null,
  avgDam: null,
  con: null,
  conCap: null,
  concentration: null,
  damroll: null,
  dex: null,
  dexCap: null,
  hitroll: null,
  hp: null,
  hpRegen: null,
  id: null,
  isBonded: false,
  isHeroic: false,
  isLight: false,
  isLimited: false,
  isSoulbound: false,
  isTwoHanded: false,
  isUnique: false,
  levelReq: null,
  ma: null,
  maRegen: null,
  material: null,
  maxDam: null,
  min: null,
  minCap: null,
  minDam: null,
  mitigation: null,
  mv: null,
  mvRegen: null,
  name: null,
  parry: null,
  per: null,
  perCap: null,
  price: null,
  quality: null,
  rent: null,
  slot: null,
  speed: null,
  spellCrit: null,
  spellDam: null,
  spellRedux: null,
  spi: null,
  spiCap: null,
  str: null,
  strCap: null,
  type: null,
  weaponStat: null,
  weaponType: null,
  weight: 0,
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

export const defaultStats = {
  ac: 0,
  align: '',
  rent: 0,
  str: 0,
  min: 0,
  dex: 0,
  con: 0,
  per: 0,
  spi: 0,
  hp: 0,
  mv: 0,
  ma: 0,
};

export const tenQuest = {
  [TEN_QUEST_MODIFIERS.STRENGTH]: {
    str: 10,
  },
  [TEN_QUEST_MODIFIERS.MIND]: {
    min: 10,
  },
  [TEN_QUEST_MODIFIERS.DEXTERITY]: {
    dex: 10,
  },
  [TEN_QUEST_MODIFIERS.CONSTITUTION]: {
    con: 10,
  },
  [TEN_QUEST_MODIFIERS.PERCEPTION]: {
    per: 10,
  },
  [TEN_QUEST_MODIFIERS.SPIRIT]: {
    spi: 10,
  },
};

export const fiveThreeQuest = {
  [FIVE_THREE_QUEST_MODIFIERS.BEAR]: {
    spi: 5,
    min: 3,
  },
  [FIVE_THREE_QUEST_MODIFIERS.BEAVER]: {
    min: 5,
    dex: 3,
  },
  [FIVE_THREE_QUEST_MODIFIERS.EAGLE]: {
    per: 5,
    str: 3,
  },
  [FIVE_THREE_QUEST_MODIFIERS.MOOSE]: {
    str: 5,
    con: 3,
  },
  [FIVE_THREE_QUEST_MODIFIERS.SNAKE]: {
    dex: 5,
    per: 3,
  },
  [FIVE_THREE_QUEST_MODIFIERS.TURTLE]: {
    con: 5,
    spi: 3,
  },
  [FIVE_THREE_QUEST_MODIFIERS.DRAGON]: {
    dex: 5,
    con: 3,
  },
  [FIVE_THREE_QUEST_MODIFIERS.HYDRA]: {
    per: 5,
    dex: 3,
  },
  [FIVE_THREE_QUEST_MODIFIERS.WYVERN]: {
    min: 5,
    spi: 3,
  },
};

export const hpQuest = {
  hp: 15,
};

export const maQuest = {
  ma: 15,
};

export const spiritQuest = {
  spi: 10,
};

export const threeAllQuest = {
  str: 3,
  min: 3,
  dex: 3,
  con: 3,
  per: 3,
  spi: 3,
};
