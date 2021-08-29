import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontWeight: 600,
  },
  stat: {
    color: '#A57BF1',
    fontSize: '14px',
    margin: '0 .55em',
  },
}, { name: 'Mui_Styles_SpellStats' });

const SpellStats = props => {
  const {
    stats: {
      spellCrit,
      spellDam,
      spellRedux,
      concentration,
    },
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.stat}>{spellCrit}</span>
      <span className={classes.stat}>{spellDam}</span>
      <span className={classes.stat}>{spellRedux}</span>
      <span className={classes.stat}>{concentration}</span>
    </div>
  );
};

SpellStats.propTypes = {
  stats: PropTypes.shape({
    spellCrit: PropTypes.number,
    spellDam: PropTypes.number,
    spellRedux: PropTypes.number,
    concentration: PropTypes.number,
    spellFail: PropTypes.number,
  }).isRequired,
};

export default SpellStats;
