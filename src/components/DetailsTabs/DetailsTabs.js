import { useState } from 'react';
import Tabs from 'components/Tabs/Tabs';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: 0,
    marginTop: 10,
    display: 'flex',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    borderRadius: '5px 5px 0 0',
  },
}, { name: 'Mui_Styles_DetailsTabs' });

const tabs = [
  { name: 'tab A', component: <div>tab A!</div> },
  { name: 'tab B', component: <div>tab B!</div> },
];

const DetailsTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const classes = useStyles();

  const handleTabClick = tab => setActiveTab(tab);

  return (
    <div className={classes.root}>
      <Tabs tabs={tabs} onTabClick={handleTabClick} activeTab={activeTab} />
    </div>
  );
};

export default DetailsTabs;
