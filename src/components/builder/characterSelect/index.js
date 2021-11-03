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
  select: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 200,
  },
  version: {
    fontSize: 10,
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_Select' });

const CharacterSelect = () => {
  const { character = {}, characters = [], saveCharacter } = useCharacterManager();
  const classes = useStyles();

  const handleCharacterSelect = characterId => {
    const selectedCharacter = characters.find(c => c.id === characterId);
    if (selectedCharacter) {
      saveCharacter(selectedCharacter);
    }
  };

  const characterOptions = getKeyArrayFromObject(characters)
    .map(c => ({
      name: c.name,
      label: (
        <span className={classes.select}>
          <span>{c.name}&nbsp;</span>
          <span className={classes.version}>{c?.version}</span>
        </span>
      ),
      value: c.id,
    }));

  return (
    <>
      {characters?.length > 0
        ? (
          <HubSelect
            onChange={handleCharacterSelect}
            options={characterOptions}
            value={character.id}
            name={character.name}
            width="135px"
          />
        )
        : <div className={classes.empty}>No characters</div>}
    </>
  );
};

export default CharacterSelect;
