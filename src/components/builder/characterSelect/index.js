import HubSelect from 'components/common/hubSelect';
import { makeStyles } from '@material-ui/styles';
import useCharacterManager from 'hooks/useCharacterManager';
import { getKeyArrayFromObject } from 'utils/utilFns';

const useStyles = makeStyles({
  empty: {
    color: 'rgba(136, 130, 130, 0.75)',
    maxWidth: '200px',
    fontFamily: 'inherit',
    fontSize: '14px',
    fontStyle: 'italic',
    width: '120px',
  },
}, { name: 'Mui_Styles_Select' });

const CharacterSelect = () => {
  const { character, characters, saveCharacter } = useCharacterManager();
  const characterOptions = getKeyArrayFromObject(characters)
    .map(c => ({ name: c?.name, value: c?.name }));
  const classes = useStyles();

  const handleCharacterSelect = characterName => {
    const selectedCharacter = characters.find(c => c.name === characterName);
    if (selectedCharacter) {
      saveCharacter(selectedCharacter);
    }
  };

  return (
    <>
      {characters?.length > 0
        ? (
          <HubSelect
            onChange={handleCharacterSelect}
            options={characterOptions}
            value={character.name}
            width="135px"
          />
        )
        : <div className={classes.empty}>No characters</div>}
    </>
  );
};

export default CharacterSelect;
