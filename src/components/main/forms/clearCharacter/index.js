import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HubButton from 'components/common/hubButton';
import DetailField from 'components/common/detailField/';
import useCharacterManager from 'hooks/useCharacterManager';
import { useRecoilValue } from 'recoil';
import { characterState } from 'data/characterState';

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
}), { name: 'Mui_Styles_ClearCharacterForm' });

const ClearCharacterForm = props => {
  const { handleClickClose } = props;
  const character = useRecoilValue(characterState);
  const { clear } = useCharacterManager();
  const [{ name, version }] = useState(character);
  const [status, setStatus] = useState(null);
  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();

    const submit = clear();
    if (submit.success) {
      handleClickClose();
    } else {
      setStatus(submit.message);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {status && <section>{status}</section>}
      <section className={classes.title}>Are you sure you want to clear the gear from this character?</section>
      <DetailField
        label="name"
        value={name}
        labelFlex="1"
        valueFlex="4"
        alignItems="baseline"
      />
      <DetailField
        label="version"
        value={version}
        labelFlex="1"
        valueFlex="4"
        alignItems="baseline"
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

ClearCharacterForm.propTypes = {
  handleClickClose: PropTypes.func,
};

export default ClearCharacterForm;
