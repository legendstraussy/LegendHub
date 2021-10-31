import { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HubInput from 'components/common/hubInput';
import HubButton from 'components/common/hubButton';
import DetailHeader from 'components/common/detail/detailHeader/';
import useCharacterManager from 'hooks/useCharacterManager';
import { useRecoilValue } from 'recoil';
import { characterState } from 'data/characterState';

const useStyles = makeStyles(({
  root: {
    '& section': {
      paddingBottom: 15,
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 'unset !important',
    alignItems: 'flex-end',
    '& button': {
      margin: '0 0 0 10px',
    },
  },
}), { name: 'Mui_Styles_EditCharacterModal' });

const EditCharacterForm = props => {
  const { handleClickClose } = props;
  const nameRef = useRef();
  const character = useRecoilValue(characterState);
  const [name, setName] = useState(character.name);
  const [version, setVersion] = useState(character?.version);
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
            label="clone"
            onClick={() => {}}
          />
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
        </div>
      </section>
    </form>
  );
};

EditCharacterForm.propTypes = {
  handleClickClose: PropTypes.func,
};

export default EditCharacterForm;
