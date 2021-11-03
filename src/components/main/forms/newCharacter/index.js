import { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HubInput from 'components/common/hubInput';
import HubButton from 'components/common/hubButton';
<<<<<<< HEAD
=======
import DetailField from 'components/common/detail/detailField/';
import useCharacterManager from 'hooks/useCharacterManager';
>>>>>>> 7c9885a2546f3028b29b00d6c2954d49f91479b1

const useStyles = makeStyles(({
  root: {
    '& section': {
<<<<<<< HEAD
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
=======
      paddingBottom: 5,
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '8px 0 !important',
    alignItems: 'flex-end',
    '& button': {
      margin: '0 0 0 10px',
>>>>>>> 7c9885a2546f3028b29b00d6c2954d49f91479b1
    },
  },
}), { name: 'Mui_Styles_NewCharacterModal' });

const NewCharacterForm = props => {
<<<<<<< HEAD
  const { handleCancel, handleConfirm } = props;
  const nameRef = useRef();
  const [name, setName] = useState('');
=======
  const { handleClickClose } = props;
  const nameRef = useRef();
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [status, setStatus] = useState(null);
  const { create } = useCharacterManager();
>>>>>>> 7c9885a2546f3028b29b00d6c2954d49f91479b1
  const classes = useStyles();

  useEffect(() => {
    nameRef?.current?.focus();
  }, []);

<<<<<<< HEAD
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
=======
  const handleSubmit = event => {
    event.preventDefault();

    const char = {
      name,
      version,
    };

    const submit = create(char);
    if (submit.success) {
      handleClickClose();
    } else {
      setStatus(submit.message);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {status && <section>{status}</section>}
      <section>Please enter the name and version of your new character.</section>
      <DetailField
        justifyContent="flex-start"
        label="name"
        maxWidth="unset"
        value={<HubInput ref={nameRef} value={name} onChange={setName} />}
      />
      <DetailField
        justifyContent="flex-start"
        label="version"
        maxWidth="unset"
        value={<HubInput value={version} onChange={setVersion} />}
      />
      <section className={classes.actions}>
        <HubButton
          label="save"
          onClick={handleSubmit}
          submit
        />
        <HubButton
          label="cancel"
          type="warning"
          onClick={handleClickClose}
        />
>>>>>>> 7c9885a2546f3028b29b00d6c2954d49f91479b1
      </section>
    </form>
  );
};

NewCharacterForm.propTypes = {
<<<<<<< HEAD
  handleCancel: PropTypes.func,
  handleConfirm: PropTypes.func,
=======
  handleClickClose: PropTypes.func,
>>>>>>> 7c9885a2546f3028b29b00d6c2954d49f91479b1
};

export default NewCharacterForm;
