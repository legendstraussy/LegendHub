import { PropTypes } from 'prop-types';
import HubChip from 'components/HubChip/HubChip';
import IconButton from 'components/IconButton/IconButton';
import { makeStyles } from '@material-ui/styles';
import { modifiers } from 'utils/constants';
import totemIcon from '../../../public/totem-head.png';

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
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  label: {
    color: '#FFD874',
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  toolbar: {
    display: 'flex',
  },
  tool: {
    margin: '0 .5em',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  field: {
    display: 'flex',
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'space-between',
    maxWidth: '50%',
    margin: '0 8px',
  },
  fieldLabel: {
    minWidth: '25%',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  fieldValue: {
    fontSize: '14px',
    fontWeight: '100',
  },
}, { name: 'Mui_Styles_CharacterFinal' });

const electives = [
  { name: 'brainpower', type: 'spell', readOnly: true },
  { name: 'innate regeneration', type: 'ability', readOnly: true },
  { name: 'sacred flame', type: 'potion', readOnly: true },
  { name: 'buff', type: 'potion', readOnly: true },
  { name: 'buff2', type: 'potion', readOnly: true },
];

const resistances = [
  { name: 'flame', type: 'resistance', readOnly: true },
];

const immunities = [
  { name: 'poison', type: 'immunity', readOnly: true },
];

const susceptibilities = [
  { name: 'stab', type: 'susceptibility', readOnly: true },
  { name: 'bludgeon', type: 'susceptibility', readOnly: true },
];

const CharacterFinal = props => {
  const { onStatsClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section>
        <header>
          <div className={classes.label}>character overview</div>
          <div className={classes.toolbar}>
            <div className={classes.tool}>
              <IconButton onClick={onStatsClick} icon={totemIcon} />
            </div>
          </div>
        </header>
      </section>
      <section>
        <div className={classes.field}>
          <div className={classes.fieldLabel}>name:</div>
          <div className={classes.fieldValue}>Deacon</div>
        </div>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>HP:</div>
            <div className={classes.fieldValue}>750</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>MV:</div>
            <div className={classes.fieldValue}>423</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>MA:</div>
            <div className={classes.fieldValue}>857</div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>AC:</div>
            <div className={classes.fieldValue}>-127</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>align:</div>
            <div className={classes.fieldValue}>GNE</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>rent:</div>
            <div className={classes.fieldValue}>53273</div>
          </div>
        </div>
      </section>
      <section>
        <header>
          <div className={classes.label}>primary stats</div>
        </header>
      </section>
      <section>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>str:</div>
            <div className={classes.fieldValue}>19</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>str cap:</div>
            <div className={classes.fieldValue}>0</div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>min:</div>
            <div className={classes.fieldValue}>113</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>min cap:</div>
            <div className={classes.fieldValue}>13</div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>dex:</div>
            <div className={classes.fieldValue}>60</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>dex cap:</div>
            <div className={classes.fieldValue}>0</div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>con:</div>
            <div className={classes.fieldValue}>72</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>con cap:</div>
            <div className={classes.fieldValue}>0</div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>per:</div>
            <div className={classes.fieldValue}>40</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>per cap:</div>
            <div className={classes.fieldValue}>0</div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>spi:</div>
            <div className={classes.fieldValue}>43</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>spi cap:</div>
            <div className={classes.fieldValue}>0</div>
          </div>
        </div>
      </section>
      <section>
        <header>
          <div className={classes.label}>regen</div>
        </header>
      </section>
      <section>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>HPR:</div>
            <div className={classes.fieldValue}>4</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>MVR:</div>
            <div className={classes.fieldValue}>3</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>MAR:</div>
            <div className={classes.fieldValue}>30</div>
          </div>
        </div>
      </section>
      <section>
        <header>
          <div className={classes.container}>
            <div className={classes.label} style={{ display: 'flex', flex: 1 }}>spell mods</div>
            <div className={classes.label} style={{ display: 'flex', flex: 1 }}>melee mods</div>
          </div>
        </header>
      </section>
      <section>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>spell dmg:</div>
            <div className={classes.fieldValue}>85</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>damroll:</div>
            <div className={classes.fieldValue}>-31</div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>spell crit:</div>
            <div className={classes.fieldValue}>73</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>hitroll:</div>
            <div className={classes.fieldValue}>-22</div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>spell redux:</div>
            <div className={classes.fieldValue}>51</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>mitigation:</div>
            <div className={classes.fieldValue}>2</div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>concen:</div>
            <div className={classes.fieldValue}>30</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>parry:</div>
            <div className={classes.fieldValue}>0</div>
          </div>
        </div>
      </section>
      <section>
        <header>
          <div className={classes.container}>
            <div className={classes.label} style={{ display: 'flex', flex: 1 }}>range mods</div>
          </div>
        </header>
      </section>
      <section>
        <div className={classes.container}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>accuracy:</div>
            <div className={classes.fieldValue}>0</div>
          </div>
        </div>
      </section>
      <section>
        <header>
          <div className={classes.container}>
            <div className={classes.label} style={{ display: 'flex', flex: 1 }}>additional mods</div>
          </div>
        </header>
      </section>
      <section>
        <div className={classes.chips}>
          {electives.map((elective, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={modifiers[elective?.type]?.color}
                label={elective.name}
                onDelete={() => console.log('removing', elective)}
                readOnly={elective.readOnly}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <header>
          <div className={classes.container}>
            <div className={classes.label} style={{ display: 'flex', flex: 1 }}>resistances</div>
          </div>
        </header>
      </section>
      <section>
        <div className={classes.chips}>
          {resistances.map((resistance, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={modifiers[resistance?.type]?.color}
                label={resistance.name}
                onDelete={() => console.log('removing', resistance)}
                readOnly={resistance.readOnly}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <header>
          <div className={classes.container}>
            <div className={classes.label} style={{ display: 'flex', flex: 1 }}>immunities</div>
          </div>
        </header>
      </section>
      <section>
        <div className={classes.chips}>
          {immunities.map((immunity, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={modifiers[immunity?.type]?.color}
                label={immunity.name}
                onDelete={() => console.log('removing', immunity)}
                readOnly={immunity.readOnly}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <header>
          <div className={classes.container}>
            <div className={classes.label} style={{ display: 'flex', flex: 1 }}>susceptibilities</div>
          </div>
        </header>
      </section>
      <section>
        <div className={classes.chips}>
          {susceptibilities.map((susceptibility, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={modifiers[susceptibility?.type]?.color}
                label={susceptibility.name}
                onDelete={() => console.log('removing', susceptibility)}
                readOnly={susceptibility.readOnly}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

CharacterFinal.propTypes = {
  onStatsClick: PropTypes.func.isRequired,
};

export default CharacterFinal;
