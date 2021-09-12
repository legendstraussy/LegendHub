import HubLayout from 'layouts/hub';
import CharacterMarquee from 'components/characterMarquee';
import ItemList from 'components/itemList';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    margin: '1.25em .75em .75em .75em',
    padding: '.55em',
    backgroundColor: 'rgba(27, 13, 24, .5)',
    display: 'flex',
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
    flexDirection: 'column',
    margin: '0 0 0 0',
    overflow: 'hidden',
  },
}, { name: 'Mui_Styles_Items' });

const Items = () => {
  const classes = useStyles();

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
          Tricky Dick
        </div>
      </div>
    </HubLayout>
  );
};

export default Items;
