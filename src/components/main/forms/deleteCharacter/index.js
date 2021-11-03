import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HubButton from 'components/common/hubButton';
import DetailField from 'components/common/detail/detailField/';
import useCharacterManager from 'hooks/useCharacterManager';
import { useRecoilValue } from 'recoil';
import { characterState } from 'data/characterState';

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
}), { name: 'Mui_Styles_DeleteCharacterModal' });

const DeleteCharacterForm = props => {
  const { handleClickClose } = props;
  const character = useRecoilValue(characterState);
  const { remove } = useCharacterManager();
  const [{ name, version }] = useState(character);
  const [status, setStatus] = useState(null);
  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();

    const submit = remove(character);
    if (submit.success) {
      handleClickClose();
    } else {
      setStatus(submit.message);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {status && <section>{status}</section>}
      <section>Are you sure you want to delete this character?</section>
      <DetailField
        justifyContent="flex-start"
        label="name"
        maxWidth="unset"
        value={name}
      />
      <DetailField
        justifyContent="flex-start"
        label="version"
        maxWidth="unset"
        value={version}
      />
      <section className={classes.actions}>
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
      </section>
    </form>
  );
};

DeleteCharacterForm.propTypes = {
  handleClickClose: PropTypes.func,
};

export default DeleteCharacterForm;
