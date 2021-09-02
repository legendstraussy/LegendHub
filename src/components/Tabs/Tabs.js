import TabsTab from 'components/TabsTab/TabsTab';
import TabsDetail from 'components/TabsDetail/TabsDetail';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
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
      <div className={classes.backTab}></div>
      <div className={classes.tabsHeader}>
        {tabs.map(tab => (
          <TabsTab
            key={tab.name}
            isActive={activeTab.name === tab.name}
            tab={tab}
            onTabClick={onTabClick}
          />
        ))}
      </div>
      <TabsDetail>
        {activeTab.component}
      </TabsDetail>
    </div>
  );
};

export default Tabs;
