import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    padding: '1em 0 1em 1em',
    background: 'rgba(0, 0, 0, .7)',
    overflowY: 'scroll',
    overflowX: 'hidden',
    borderRadius: '0 0 5px 5px',
  },
}, { name: 'Mui_Styles_TabsDetail' });

const TabsDetail = props => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

TabsDetail.propTypes = {
  children: PropTypes.node,
};

export default TabsDetail;
