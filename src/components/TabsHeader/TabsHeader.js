import TabsTab from 'components/TabsTab/TabsTab';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    marginTop: '-10px',
    height: '35px',
    display: 'flex',
    justifyContent: 'space-around',
  },
}, { name: 'Mui_Styles_TabsHeader' });

const TabsHeader = props => {
  const { activeTab, onTabClick, tabs } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {tabs.map(tab => (
        <TabsTab
          key={tab.name}
          isActive={activeTab.name === tab.name}
          tab={tab}
          onTabClick={onTabClick}
        />
      ))}
    </div>
  );
};

export default TabsHeader;
