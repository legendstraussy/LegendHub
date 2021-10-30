import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HubButton from 'components/common/hubButton';
import DetailField from 'components/common/detail/detailField/';
import useCharacterManager from 'hooks/useCharacterManager';
import { useRecoilValueLoadable } from 'recoil';
import { characterState } from 'data/characterState';

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
}), { name: 'Mui_Styles_CharacterModal' });

const DeleteCharacterForm = props => {
  const { handleClickClose } = props;
  const [status, setStatus] = useState(null);
  const character = useRecoilValueLoadable(characterState);
  const { remove } = useCharacterManager();
  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();

    const submit = remove(character);
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
        <p>Are you sure you want to delete this character?</p>
        <DetailField
          label="name"
          value="tricky dick"
        />
        <DetailField
          label="version"
          value="tricky dick 2"
        />
      </section>
      <section className={classes.actions}>
        <div>
          <HubButton
            autoFocus
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

DeleteCharacterForm.propTypes = {
  handleClickClose: PropTypes.func,
};

export default DeleteCharacterForm;
