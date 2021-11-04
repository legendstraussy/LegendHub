import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  table: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '0 0 0 0',
    overflow: 'hidden',
  },
  marquee: {
    display: 'flex',
  },
}, { name: 'Mui_Styles_MarqueeTable' });

const MarqueeTable = props => {
  const { marquee, children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.marquee}>
        {marquee}
      </div>
      <div className={classes.table}>
        {children}
      </div>
    </div>
  );
};

MarqueeTable.propTypes = {
  marquee: PropTypes.node,
  children: PropTypes.node,
};

export default MarqueeTable;
