import TabsHeader from 'components/TabsHeader/TabsHeader';
import TabsDetail from 'components/TabsDetail/TabsDetail';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
}, { name: 'Mui_Styles_Tabs' });

const Tabs = props => {
  const { activeTab, onTabClick, tabs } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TabsHeader tabs={tabs} onTabClick={onTabClick} activeTab={activeTab} />
      <TabsDetail>
        {activeTab.component}
      </TabsDetail>
    </div>
  );
};

export default Tabs;
