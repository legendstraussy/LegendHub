import { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HubInput from 'components/common/hubInput';
import HubButton from 'components/common/hubButton';
import DetailField from 'components/common/detailField/';
import useCharacterManager from 'hooks/useCharacterManager';

const useStyles = makeStyles(({
  root: {
    display: 'grid',
    gridRowGap: '1em',
  },
  title: {
    marginBottom: 10,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 1,
    alignItems: 'flex-end',
    '& button': {
      margin: '0 0 0 1.5em',
    },
  },
}), { name: 'Mui_Styles_NewCharacterForm' });

const NewCharacterForm = props => {
  const { handleClickClose } = props;
  const nameRef = useRef();
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [status, setStatus] = useState(null);
  const { create } = useCharacterManager();
  const classes = useStyles();

  useEffect(() => {
    nameRef?.current?.focus();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    const submit = create(name, version);
    if (submit.success) {
      handleClickClose();
    } else {
      setStatus(submit.message);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {status && <section>{status}</section>}
      <section className={classes.title}>Please enter the name and version of your new character.</section>
      <DetailField
        label="name"
        value={<HubInput ref={nameRef} value={name} onChange={setName} />}
        labelFlex="1"
        valueFlex="4"
      />
      <DetailField
        label="version"
        value={<HubInput value={version} onChange={setVersion} />}
        labelFlex="1"
        valueFlex="4"
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
      </section>
    </form>
  );
};

NewCharacterForm.propTypes = {
  handleClickClose: PropTypes.func,
};

export default NewCharacterForm;
