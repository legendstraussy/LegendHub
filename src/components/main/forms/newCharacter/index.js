import { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HubInput from 'components/common/hubInput';
import HubButton from 'components/common/hubButton';

const useStyles = makeStyles(({
  root: {
    '& section': {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 15,
    },
  },
  actions: {
    padding: 'unset !important',
    alignItems: 'flex-end',
    '& > div': {
      width: 205,
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
}), { name: 'Mui_Styles_NewCharacterModal' });

const NewCharacterForm = props => {
  const { handleCancel, handleConfirm } = props;
  const nameRef = useRef();
  const [name, setName] = useState('');
  const classes = useStyles();

  useEffect(() => {
    nameRef?.current?.focus();
  }, []);

  return (
    <form className={classes.root} onSubmit={event => handleConfirm(event, name)}>
      <section>
        <p>Please enter the name of your new character.</p>
        <HubInput ref={nameRef} value={name} onChange={setName} />
      </section>
      <section className={classes.actions}>
        <div>
          <HubButton
            label="confirm"
            onClick={event => handleConfirm(event, name)}
          />
          <HubButton
            label="cancel"
            type="warning"
            onClick={handleCancel}
          />
        </div>
      </section>
    </form>
  );
};

NewCharacterForm.propTypes = {
  handleCancel: PropTypes.func,
  handleConfirm: PropTypes.func,
};

export default NewCharacterForm;
