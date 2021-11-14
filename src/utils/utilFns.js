import {
  HISTORY_LENGTH,
  NO_VALID_ALIGN,
} from 'data/constants';

export const getKeyArrayFromObject = obj => Object.keys(obj).map(key => obj[key]);

// export const isDuplicateCharacter = (existingCharacter, newCharacter) => (existingCharacter.name === newCharacter.name
//     && existingCharacter.version === newCharacter.version);

export const configureCalcAlign = align => {
  let alignText = align;
  return itemAlign => {
    if (alignText === itemAlign) return alignText;
    alignText = alignText
      .split('')
      .reduce((acc, cur) => (itemAlign.includes(cur)) ? acc === NO_VALID_ALIGN ? cur : acc + cur : acc.length ? acc : NO_VALID_ALIGN, '');
    return alignText;
  };
};

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const getAdjustedHistory = history => {
  if (history.length === HISTORY_LENGTH) {
    const [first, ...rest] = history;
    return rest;
  }
  return history;
};
