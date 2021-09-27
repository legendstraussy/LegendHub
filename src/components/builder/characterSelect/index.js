import { useEffect, useState } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const characters = [
  // 'Deacon',
  // 'Galactus',
  // 'Testeroniopio',
];

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.main.blue,
    maxWidth: '200px',
    fontFamily: 'inherit',
    fontSize: '14px',
    width: '120px',
    '& .MuiSelect-select': {
      cursor: 'default',
    },
    '&:before, &:after': {
      border: 'unset',
      content: 'unset',
    },
    '& .MuiSelect-icon': {
      color: '#219AFF',
    },
  },
  empty: {
    color: 'rgba(136, 130, 130, 0.75)',
    maxWidth: '200px',
    fontFamily: 'inherit',
    fontSize: '14px',
    fontStyle: 'italic',
    width: '120px',
  },
}), { name: 'Mui_Styles_Select' });

const CharacterSelect = () => {
  const [character, setCharacter] = useState(characters[0]);
  const classes = useStyles();

  useEffect(() => {
    if (character) {
      // handle loading a new character
    }
  }, [character]);

  return (
    <>
      {characters?.length > 0
        ? (
          <Select
            className={classes.root}
            style={{ cursor: 'default' }}
            value={character}
            onChange={event => setCharacter(event.target.value)}
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
              getContentAnchorEl: null,
            }}
          >
            {characters?.map(c => (
              <MenuItem key={c} value={c}>{c}</MenuItem>
            ))}
          </Select>
        )
        : <div className={classes.empty}>No characters</div>}
    </>
  );
};

export default CharacterSelect;
