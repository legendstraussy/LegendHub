import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 600,
  },
  stat: {
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    width: 40,
  },
  ac: {
    width: 32,
  },
  align: {
    width: 50,
  },
  rent: {
    width: 38,
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
      <span className={`${classes.stat} ${classes.ac}`}>{ac}</span>
      <span className={`${classes.stat} ${classes.align}`}>{align}</span>
      <span className={`${classes.stat} ${classes.rent}`}>{rent}</span>
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
