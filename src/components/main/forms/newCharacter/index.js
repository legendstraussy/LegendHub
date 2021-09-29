import { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HubInput from 'components/common/hubInput';

const useStyles = makeStyles(({
  root: {
    '& header': {
      paddingBottom: 15,
    },
  },
}), { name: 'Mui_Styles_NewCharacterModal' });

const NewCharacterForm = props => {
  const { onSubmit } = props;
  const nameRef = useRef();
  const [name, setName] = useState('');
  const classes = useStyles();

  useEffect(() => {
    nameRef?.current?.focus();
  }, []);

  return (
    <form className={classes.root} onSubmit={event => onSubmit(event, name)}>
      <header>Please enter the name of your new character.</header>
      <HubInput ref={nameRef} value={name} onChange={setName} />
    </form>
  );
};

NewCharacterForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default NewCharacterForm;
