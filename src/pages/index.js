import { useState } from 'react';
import CharacterMarquee from 'components/characterMarquee';
import CharacterStats from 'components/characterStats';
import ItemDetails from 'components/itemDetails';
import EquipmentList from 'components/equipmentList';
import DetailsTabs from 'components/detail/detailTabs';
import HubLayout from 'layouts/hub';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    margin: '1.25em .75em .75em .75em',
    padding: '.55em',
    backgroundColor: 'rgba(27, 13, 24, .5)',
    display: 'flex',
    flex: 1,
    color: '#fff',
    overflow: 'hidden',
  },
  left: {
    maxWidth: '80%',
    margin: '.2em .35em .2em .2em',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  },
  right: {
    maxWidth: '20%',
    minWidth: '300px',
    display: 'flex',
    flex: 1,
    margin: '.2em .2em .2em .35em',
    overflow: 'hidden',
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '0 0 0 0',
    overflow: 'hidden',
  },
  marquee: {
    display: 'flex',
  },
}, { name: 'Mui_Styles_Builder' });

const Builder = () => {
  const classes = useStyles();
  const [tabs] = useState([
    { name: 'character', iconPath: '/totem-head.png', component: <CharacterStats /> },
    { name: 'item', iconPath: '/swords-emblem.png', component: <ItemDetails /> },
  ]);

  return (
    <HubLayout>
      <div className={classes.root}>
        <div className={classes.left}>
          <div className={classes.marquee}>
            <CharacterMarquee />
          </div>
          <div className={classes.main}>
            <EquipmentList />
          </div>
        </div>
        <div className={classes.right}>
          <DetailsTabs tabs={tabs} />
        </div>
      </div>
    </HubLayout>
  );
};

export default Builder;
