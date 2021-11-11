import { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HubInput from 'components/common/hubInput';
import HubButton from 'components/common/hubButton';
import HubCheckbox from 'components/common/hubCheckbox';
import DetailField from 'components/common/detail/detailField';
import useCharacterManager from 'hooks/useCharacterManager';
import { useRecoilValue } from 'recoil';
import { characterState } from 'data/characterState';
import theme from 'utils/theme';

const useStyles = makeStyles(({
  root: {
    '& section': {
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
    },
  },
}), { name: 'Mui_Styles_EditCharacterForm' });

const EditCharacterForm = props => {
  const { handleClickClose } = props;
  const character = useRecoilValue(characterState);
  const { clone, update } = useCharacterManager();
  const [name, setName] = useState(character?.name || '');
  const [version, setVersion] = useState(character?.version || '');
  const [isCloning, setIsCloning] = useState(false);
  const [status, setStatus] = useState(null);
  const nameRef = useRef();
  const versionRef = useRef();
  const classes = useStyles();

  useEffect(() => {
    const ref = isCloning ? nameRef : versionRef;
    ref?.current?.focus();
    if (!isCloning) {
      setName(character.name);
    }
  }, [isCloning, character.name]);

  const handleSubmit = event => {
    event.preventDefault();

    const edit = isCloning ? clone : update;
    const submit = edit({
      name,
      version,
    });

    if (submit?.success) {
      handleClickClose();
    } else {
      setStatus(submit?.message);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {status && <section>{status}</section>}
      {isCloning
        ? (
          <>
            <section>Create a new character below to inherit the existing build.</section>
            <DetailField
              label="name"
              value={<HubInput ref={nameRef} value={name} onChange={setName} />}
              labelFlex="1"
              valueFlex="4"
              padding="8px"
            />
          </>
        )
        : (
          <>
            <section>Please enter the name of your new character.</section>
            <DetailField
              label="name"
              value={<span style={{ display: 'flex', height: '35px', alignItems: 'center' }}>{name}</span>}
              labelFlex="1"
              valueFlex="4"
              padding="8px"
            />
          </>
        )}
      <DetailField
        label="version"
        value={<HubInput ref={versionRef} value={version} onChange={setVersion} />}
        labelFlex="1"
        valueFlex="4"
        padding="8px"
      />
      <DetailField
        alignItems="center"
        label={<span style={{ color: theme.palette.main.yellow }}>is a clone?</span>}
        hideColon
        value={<HubCheckbox onChange={setIsCloning} value={isCloning} />}
        labelFlex="1"
        valueFlex="4"
        padding="8px"
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

EditCharacterForm.propTypes = {
  handleClickClose: PropTypes.func,
};

export default EditCharacterForm;
