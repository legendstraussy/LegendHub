import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 600,
    width: 130,
  },
  stat: {
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    margin: '0 .4em',
  },
}, { name: 'Mui_Styles_GenericStats' });

const GenericStats = props => {
  const {
    stats: {
      ac,
      align,
      rent,
    },
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.stat}>{ac}</span>
      <span className={classes.stat}>{align}</span>
      <span className={classes.stat}>{rent}</span>
    </div>
  );
};

GenericStats.propTypes = {
  stats: PropTypes.shape({
    ac: PropTypes.number,
    align: PropTypes.string,
    rent: PropTypes.number,
  }).isRequired,
};

export default GenericStats;
