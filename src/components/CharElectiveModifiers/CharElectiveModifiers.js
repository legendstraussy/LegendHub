import IconButton from 'components/IconButton/IconButton';
import HubChip from 'components/HubChip/HubChip';
import { makeStyles } from '@material-ui/styles';
import { modifiers } from 'utils/constants';
import potionIcon from '../../../public/fizzing-flask.png';
import spellIcon from '../../../public/orb-wand.png';
import skillIcon from '../../../public/star-formation.png';
import abilityIcon from '../../../public/armor-punch.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& section': {
      margin: '0 0 1em 0',
    },
    '& header': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  label: {
    color: '#FFD874',
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  tool: {
    margin: '0 .5em',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}, { name: 'Mui_Styles_CharElectiveModifiers' });

const electives = [
  { name: 'brainpower', type: 'spell' },
  { name: 'innate regeneration', type: 'ability' },
  { name: 'sacred flame', type: 'potion' },
  { name: 'buff', type: 'potion' },
  { name: 'buff2', type: 'potion' },
];

const CharElectiveModifiers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section>
        <header>
          <div className={classes.label}>elective modifiers</div>
        </header>
      </section>
      <section>
        <div className={classes.toolbar}>
          <div className={classes.tool}>
            <IconButton icon={potionIcon} />
          </div>
          <div className={classes.tool}>
            <IconButton icon={spellIcon} />
          </div>
          <div className={classes.tool}>
            <IconButton icon={skillIcon} />
          </div>
          <div className={classes.tool}>
            <IconButton icon={abilityIcon} />
          </div>
        </div>
      </section>
      <section>
        <div className={classes.chips}>
          {electives.map((elective, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={modifiers[elective?.type]?.color}
                label={elective.name}
                onDelete={() => console.log('removing', elective)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CharElectiveModifiers;
