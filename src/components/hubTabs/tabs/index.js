import { PropTypes } from 'prop-types';
import Tab from 'components/hubTabs/tab';
import TabDetail from 'components/hubTabs/tabDetail';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
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
}, { name: 'Mui_Styles_Tabs' });

const Tabs = props => {
  const { activeTab, onTabClick, tabs } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.backTab} />
      <div className={classes.tabsHeader}>
        {tabs.map(tab => (
          <Tab
            key={tab.name}
            test={tab?.test}
            isActive={activeTab.name === tab.name}
            tab={tab}
            onTabClick={onTabClick}
          />
        ))}
      </div>
      <TabDetail>
        {activeTab.component}
      </TabDetail>
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.shape({
    component: PropTypes.node,
    name: PropTypes.string,
  }),
  onTabClick: PropTypes.func,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

export default Tabs;
