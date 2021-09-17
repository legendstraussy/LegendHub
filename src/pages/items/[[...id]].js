import { useState } from 'react';
import HubLayout from 'layouts/hub';
import DetailsTabs from 'components/detail/detailTabs';
import ItemList from 'components/itemList';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    color: '#fff',
    backgroundColor: 'rgba(27, 13, 24, .5)',
    margin: '1.25em .75em .75em .75em',
    padding: '.55em',
    overflow: 'hidden',
  },
  left: {
    maxWidth: '80%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    margin: '.2em .35em .2em .2em',
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
}, { name: 'Mui_Styles_Items' });

const Items = () => {
  const classes = useStyles();
  const [tabs] = useState([
    { name: 'search', iconPath: '/magnifying-glass.png', component: <div>tab A</div> },
    { name: 'item', iconPath: '/swords-emblem.png', component: <div>tab B!</div> },
  ]);

  return (
    <HubLayout>
      <div className={classes.root}>
        <div className={classes.left}>
          <div style={{ display: 'flex' }}>
            equipped item here
          </div>
          <div className={classes.main}>
            <ItemList />
          </div>
        </div>
        <div className={classes.right}>
          <DetailsTabs tabs={tabs} />
        </div>
      </div>
    </HubLayout>
  );
};

export default Items;
