import { Divider } from '@material-ui/core';
import CharacterSelect from 'components/builder/characterSelect';
import HeathStats from 'components/builder/characterMarquee/marqueeStats/health';
import BaseStats from 'components/builder/characterMarquee/marqueeStats/main';
import GenericStats from 'components/builder/characterMarquee/marqueeStats/general';
import MeleeStats from 'components/builder/characterMarquee/marqueeStats/melee';
import ParryStat from 'components/builder/characterMarquee/marqueeStats/parry';
import SpellStats from 'components/builder/characterMarquee/marqueeStats/spell';
import RangeStats from 'components/builder/characterMarquee/marqueeStats/range';
import RegenStats from 'components/builder/characterMarquee/marqueeStats/regen';
import { makeStyles } from '@material-ui/styles';

const meleeStats = {
  hitroll: -22,
  damroll: -32,
  mitigation: 3,
};

const rangeStats = {
  accuracy: 10,
};

const parryStat = {
  parry: 3,
};

const spellStats = {
  spellCrit: 78,
  spellDam: 85,
  spellRedux: 47,
  concentration: 30,
};

const regenStats = {
  hpRegen: 5,
  mvRegen: 2,
  maRegen: 30,
};

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: '36px',
    margin: '0 0 .2em 0',
    padding: '.5em',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    borderRadius: '5px',
    cursor: 'default',
  },
  divider: {
    backgroundColor: 'rgba(105, 85, 85, .75)',
    marginRight: '.5em',
  },
}, { name: 'Mui_Styles_CharacterMarquee' });

const CharacterMarquee = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CharacterSelect />
      <Divider orientation="vertical" className={classes.divider} />
      <HeathStats />
      <BaseStats />
      <GenericStats />
      <MeleeStats stats={meleeStats} />
      <ParryStat stats={parryStat} />
      <RangeStats stats={rangeStats} />
      <SpellStats stats={spellStats} />
      <RegenStats stats={regenStats} />
    </div>
  );
};

export default CharacterMarquee;
