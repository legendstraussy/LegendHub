import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flex: 1,
  },
}, { name: 'Mui_Styles_HubTabDetail' });

const HubTabsDetail = props => {
  const { isActive, children } = props;
  const classes = useStyles();

  if (!isActive) return null;

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

HubTabsDetail.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

export default HubTabsDetail;
