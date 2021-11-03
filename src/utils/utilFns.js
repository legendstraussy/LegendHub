export const getKeyArrayFromObject = obj => Object.keys(obj).map(key => obj[key]);

// eslint-disable-next-line arrow-body-style
export const isDuplicateCharacter = (existingCharacter, newCharacter) => {
  return (existingCharacter.name === newCharacter.name
    && existingCharacter.version === newCharacter.version);
};
