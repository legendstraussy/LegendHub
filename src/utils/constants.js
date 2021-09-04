import theme from 'utils/theme';

export const stats = {
  str: {
    name: 'strength',
    color: theme.palette.stats.strength,
  },
  min: {
    name: 'mind',
    color: theme.palette.stats.mind,
  },
  dex: {
    name: 'dexterity',
    color: theme.palette.stats.dexterity,
  },
  con: {
    name: 'constitution',
    color: theme.palette.stats.constitution,
  },
  per: {
    name: 'perception',
    color: theme.palette.stats.perception,
  },
  spi: {
    name: 'spirit',
    color: theme.palette.stats.spirit,
  },
};

export const fiveThreeQuests = [
  {
    name: 'bear',
    modifier: [
      { stat: stats.spi, delta: 5 },
      { stat: stats.min, delta: 3 },
    ],
  },
  {
    name: 'beaver',
    modifier: [
      { stat: stats.min, delta: 5 },
      { stat: stats.dex, delta: 3 },
    ],
  },
  {
    name: 'eagle',
    modifier: [
      { stat: stats.per, delta: 5 },
      { stat: stats.str, delta: 3 },
    ],
  },
  {
    name: 'moose',
    modifier: [
      { stat: stats.str, delta: 5 },
      { stat: stats.con, delta: 3 },
    ],
  },
  {
    name: 'snake',
    modifier: [
      { stat: stats.dex, delta: 5 },
      { stat: stats.per, delta: 3 },
    ],
  },
  {
    name: 'turtle',
    modifier: [
      { stat: stats.con, delta: 5 },
      { stat: stats.spi, delta: 3 },
    ],
  },
  {
    name: 'dragon',
    modifier: [
      { stat: stats.dex, delta: 5 },
      { stat: stats.con, delta: 3 },
    ],
  },
  {
    name: 'hydra',
    modifier: [
      { stat: stats.per, delta: 5 },
      { stat: stats.dex, delta: 3 },
    ],
  },
  {
    name: 'wyvern',
    modifier: [
      { stat: stats.min, delta: 5 },
      { stat: stats.spi, delta: 3 },
    ],
  },
];
