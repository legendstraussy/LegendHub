import HubIconButton from 'components/common/hubIconButton';
import HubChip from 'components/common/hubChip';
import { makeStyles } from '@material-ui/styles';
import { modifierColors } from 'data/constants';
import DetailHeader from 'components/common/detailHeader';
import { useCallback, useState } from 'react';
import HubModal from 'components/common/hubModal';
import ElectivesForm from 'components/main/forms/electives';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    margin: '1em 0',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: '20% 20% 20% 20%',
    justifyItems: 'flex-start',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}, { name: 'Mui_Styles_CharElectiveModifiers' });

const electives = [
  { name: 'brainpower', value: 'brainpower', type: 'spell' },
  { name: 'innate regeneration', value: 'innate regeneration', type: 'ability' },
  { name: 'sacred flame', value: 'sacred flame', type: 'potion' },
  { name: 'buff', value: 'buff', type: 'potion' },
  { name: 'buff2', value: 'buff2', type: 'potion' },
];

const CharElectiveModifiers = () => {
  const [elective, setElective] = useState('potion');
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [modals] = useState({
    potion: { title: 'potion modifiers' },
    spell: { title: 'spell modifiers' },
    skill: { title: 'skill modifiers' },
    ability: { title: 'ability modifiers' },
  });
  const { title } = modals[elective];

  const handleModalClick = useCallback(key => {
    setElective(key);
    setOpen(true);
  }, [setElective, setOpen]);

  return (
    <main className={classes.root}>
      <DetailHeader title="elective modifiers" />
      <section className={classes.buttons}>
        <HubIconButton onClick={() => handleModalClick('potion')} iconPath="/fizzing-flask.png" width="35px" height="35px" />
        <HubIconButton onClick={() => handleModalClick('spell')} iconPath="/orb-wand.png" width="35px" height="35px" />
        <HubIconButton onClick={() => handleModalClick('skill')} iconPath="/star-formation.png" width="35px" height="35px" />
        <HubIconButton onClick={() => handleModalClick('ability')} iconPath="/armor-punch.png" width="35px" height="35px" />
      </section>
      <section className={classes.chips}>
        {electives.map((elective, i) => (
          <div key={i}>
            <HubChip
              bgColor={modifierColors[elective?.type]?.bgColor}
              color={modifierColors[elective?.type]?.color}
              label={elective.name}
              onDelete={() => {}}
            />
          </div>
        ))}
      </section>
      <HubModal
        handleClose={() => setOpen(false)}
        show={open}
        title={title}
      >
        <ElectivesForm elective={elective} />
      </HubModal>
    </main>
  );
};

export default CharElectiveModifiers;
