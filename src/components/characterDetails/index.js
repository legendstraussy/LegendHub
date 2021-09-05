import { useState } from 'react';
import Tabs from 'components/hubTabs/tabs';
import CharacterStats from 'components/characterStats';
import { makeStyles } from '@material-ui/styles';
import CharacterStatsIcon from '/public/totem-head.png';
import itemDetailsIcon from '/public/swords-emblem.png';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
}, { name: 'Mui_Styles_DetailsTabs' });

const tabs = [
  { name: 'character', icon: CharacterStatsIcon, component: <CharacterStats /> },
  { name: 'item', icon: itemDetailsIcon, component: <div>tab B!</div> },
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