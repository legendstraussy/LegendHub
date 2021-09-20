// import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    background: 'rgba(0, 0, 0, .7)',
    borderRadius: '0 0 5px 5px',
    padding: '1em',
    fontSize: 14,
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_HubFooter' });

const HubFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      16/22 slots filled
    </div>
  );
};

HubFooter.propTypes = {
};

export default HubFooter;
