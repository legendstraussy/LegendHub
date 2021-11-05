export const getKeyArrayFromObject = obj => Object.keys(obj).map(key => obj[key]);

export const isDuplicateCharacter = (existingCharacter, newCharacter) => (existingCharacter.name === newCharacter.name
    && existingCharacter.version === newCharacter.version);

export const configureCalcAlign = align => {
  const BAD_ALIGN = '---';
  let alignText = align;
  return itemAlign => {
    if (alignText === itemAlign) return alignText;
    const newAlign = alignText
      .split('')
      .reduce((acc, cur) => (itemAlign.includes(cur)) ? acc + cur : acc, '');
    alignText = newAlign.length ? newAlign : BAD_ALIGN;
    return alignText;
  };
};
