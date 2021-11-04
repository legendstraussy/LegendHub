export const getKeyArrayFromObject = obj => Object.keys(obj).map(key => obj[key]);

export const isDuplicateCharacter = (existingCharacter, newCharacter) => (existingCharacter.name === newCharacter.name
    && existingCharacter.version === newCharacter.version);
