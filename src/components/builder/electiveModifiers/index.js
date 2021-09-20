import HubIconButton from 'components/common/hubIconButton';
import HubChip from 'components/common/hubChip';
import { makeStyles } from '@material-ui/styles';
import { modifierColors } from 'data/constants';

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
            <HubIconButton iconPath="/fizzing-flask.png" />
          </div>
          <div className={classes.tool}>
            <HubIconButton iconPath="/orb-wand.png" />
          </div>
          <div className={classes.tool}>
            <HubIconButton iconPath="/star-formation.png" />
          </div>
          <div className={classes.tool}>
            <HubIconButton iconPath="/armor-punch.png" />
          </div>
        </div>
      </section>
      <section>
        <div className={classes.chips}>
          {electives.map((elective, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={modifierColors[elective?.type]?.color}
                label={elective.name}
                onDelete={() => {}}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CharElectiveModifiers;
