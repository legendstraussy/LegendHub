import { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HubInput from 'components/common/hubInput';
import HubButton from 'components/common/hubButton';
import DetailHeader from 'components/common/detail/detailHeader/';
import useCharacterManager from 'hooks/useCharacterManager';

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

    const char = {
      name,
      version,
    };

    const submit = create(char);
    if (submit.success) {
      setStatus(submit.message);
      handleClickClose();
    } else {
      setStatus(submit.message);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <section>
        {status && <p>{status}</p>}
        <p>Please enter the name of your new character.</p>
        <section>
          <DetailHeader title="Name" fontSize="12px" isRequired />
        </section>
        <section>
          <div className={classes.container}>
            <HubInput ref={nameRef} value={name} onChange={setName} />
          </div>
        </section>
        <section>
          <DetailHeader title="version" fontSize="12px" isRequired />
        </section>
        <section>
          <div className={classes.container}>
            <HubInput value={version} onChange={setVersion} />
          </div>
        </section>
      </section>
      <section className={classes.actions}>
        <div>
          <HubButton
            label="confirm"
            onClick={handleSubmit}
            submit
          />
          <HubButton
            label="cancel"
            type="warning"
            onClick={handleClickClose}
          />
        </div>
      </section>
    </form>
  );
};

NewCharacterForm.propTypes = {
  handleClickClose: PropTypes.func,
};

export default NewCharacterForm;
