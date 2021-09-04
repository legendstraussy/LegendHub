import { PropTypes } from 'prop-types';
import IconButton from 'components/IconButton/IconButton';
import HealthStats from 'components/HealthStats/HealthStats';
import { makeStyles } from '@material-ui/styles';
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
  label: {
    color: '#FFD874',
    fontSize: '12px',
    textTransform: 'uppercase',
  },
  toolbar: {
    display: 'flex',
  },
  tool: {
    margin: '0 .5em',
  },
  field: {
    display: 'flex',
    alignItems: 'baseline',
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
  left: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
}, { name: 'Mui_Styles_CharacterFinal' });

const CharacterFinal = props => {
  const { onStatsClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section>
        <header>
          <div className={classes.label}>final stats</div>
          <div className={classes.toolbar}>
            <div className={classes.tool}>
              <IconButton onClick={onStatsClick} icon={totemIcon} />
            </div>
          </div>
        </header>
      </section>
      <section>
        <div className={classes.field}>
          <div className={classes.fieldLabel}>name:&nbsp;</div>
          <div className={classes.fieldValue}>Deacon</div>
        </div>
        <div className={classes.left}>
          <HealthStats labelSize="14px" />
        </div>
        <div className={classes.left}>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>AC:&nbsp;</div>
            <div className={classes.fieldValue}>-127</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>align:&nbsp;</div>
            <div className={classes.fieldValue}>GNE</div>
          </div>
          <div className={classes.field}>
            <div className={classes.fieldLabel}>rent:&nbsp;</div>
            <div className={classes.fieldValue}>53273</div>
          </div>
        </div>
      </section>
    </div>
  );
};

CharacterFinal.propTypes = {
  onStatsClick: PropTypes.func.isRequired,
};

export default CharacterFinal;
