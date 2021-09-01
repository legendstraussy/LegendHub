import { useState } from 'react';
import Tabs from 'components/Tabs/Tabs';
import { makeStyles } from '@material-ui/styles';
import characterDetailsIcon from '../../../public/totem-head.png';
import itemDetailsIcon from '../../../public/swords-emblem.png';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  },
}, { name: 'Mui_Styles_DetailsTabs' });

const tabs = [
  { name: 'character', icon: characterDetailsIcon, component: <div>tab A!</div> },
  { name: 'item', icon: itemDetailsIcon, component: <div>tab B!</div> },
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
