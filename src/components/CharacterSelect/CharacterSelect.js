import { useEffect, useState } from 'react';
import { Divider, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: '#219AFF',
    maxWidth: '130px',
    fontFamily: 'inherit',
    fontSize: '16px',
    width: '130px',
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
  divider: {
    backgroundColor: 'rgba(105, 85, 85, .75)',
  },
}, { name: 'Mui_Styles_Select' });

const CharacterSelect = () => {
  const [character, setCharacter] = useState('Deacon');
  const classes = useStyles();

  useEffect(() => {
    if (character) {
      console.log('bingo', character);
    }
  }, [character]);

  return (
    <>
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
        <MenuItem value="Deacon">Deacon</MenuItem>
        <MenuItem value="Galactus">Galactus</MenuItem>
        <MenuItem value="Testeroniopio">Testeroniopio</MenuItem>
      </Select>
      <Divider orientation="vertical" className={classes.divider} />
    </>
  );
};

export default CharacterSelect;
