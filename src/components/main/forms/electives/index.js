import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import HubButton from 'components/common/hubButton';
import DetailSelect from 'components/common/detailSelect';
import useCharacterManager from 'hooks/useCharacterManager';
import { useRecoilValue } from 'recoil';
import { characterState } from 'data/characterState';
import HubSelect from 'components/common/hubSelect';

const electives = [
  { name: 'brainpower', value: 'brainpower', type: 'spell' },
  { name: 'innate regeneration', value: 'innate regeneration', type: 'ability' },
  { name: 'sacred flame', value: 'sacred flame', type: 'potion' },
  { name: 'buff', value: 'buff', type: 'potion' },
  { name: 'buff2', value: 'buff2', type: 'potion' },
];

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
}), { name: 'Mui_Styles_ElectivesForm' });

const ElectivesForm = props => {
  const { handleClickClose, elective } = props;
  // const character = useRecoilValue(characterState);
  // const { discard } = useCharacterManager();
  const [modifier, setModifier] = useState(null);
  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();

    // const submit = discard(character);
    // if (submit.success) {
    //   handleClickClose();
    // }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <section className={classes.title}>Please select from the {elective} modifiers below.</section>
      <HubSelect
        defaultText="Select an elective"
        onChange={setModifier}
        options={electives}
        value={modifier}
      />
      <section className={classes.actions}>
        <HubButton
          label="confirm"
          onClick={handleSubmit}
          submit
          type="primary"
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

ElectivesForm.propTypes = {
  elective: PropTypes.string,
  handleClickClose: PropTypes.func,
};

export default ElectivesForm;
