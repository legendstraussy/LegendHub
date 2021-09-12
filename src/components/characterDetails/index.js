import { useState } from 'react';
import Tabs from 'components/hubTabs/tabs';
import CharacterStats from 'components/characterStats';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  },
}, { name: 'Mui_Styles_DetailsTabs' });

const tabs = [
  { name: 'character', iconPath: '/totem-head.png', component: <CharacterStats /> },
  { name: 'item', iconPath: '/swords-emblem.png', component: <div>tab B!</div> },
];

const CharacterDetails = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const classes = useStyles();

  const handleTabClick = tab => setActiveTab(tab);

  return (
    <div className={classes.root}>
      <Tabs tabs={tabs} onTabClick={handleTabClick} activeTab={activeTab} />
    </div>
  );
};

export default CharacterDetails;
