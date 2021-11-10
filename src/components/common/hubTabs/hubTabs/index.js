import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  tabsHeader: {
    position: 'relative',
    marginTop: '-10px',
    height: '35px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  backTab: {
    position: 'relative',
    height: 25,
    marginBottom: -15,
    padding: 0,
    top: 10,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    borderRadius: '5px 5px 0 0',
  },
}, { name: 'Mui_Styles_HubTabs' });

const HubTabs = props => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.backTab} />
      <div className={classes.tabsHeader}>
        {children}
      </div>
    </div>
  );
};

HubTabs.propTypes = {
  children: PropTypes.node,
};

export default HubTabs;
