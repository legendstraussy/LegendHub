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
import VitalStats from 'components/builder/characterMarquee/marqueeStats/vitals';
import { makeStyles } from '@material-ui/styles';

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
      <MeleeStats />
      <ParryStat />
      <RangeStats />
      <SpellStats />
      <VitalStats />
      <RegenStats />
    </div>
  );
};

export default CharacterMarquee;
