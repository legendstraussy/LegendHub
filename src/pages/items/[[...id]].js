<<<<<<< HEAD
import HubLayout from 'layouts/hub';
import CharacterMarquee from 'components/characterMarquee';
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
    flex: 3.9,
    margin: '.2em .35em .2em .2em',
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '.2em .2em .2em .35em',
    overflow: 'hidden',
  },
  main: {
    margin: '0 0 0 0',
    flex: 1,
  },
}, { name: 'Mui_Styles_ItemsSearch' });

const Items = () => {
  const classes = useStyles();

  return (
    <HubLayout>
      <div className={classes.root}>
        <div className={classes.left}>
          <div>
            <CharacterMarquee />
          </div>
          <div className={classes.main}>
            Beze Bop
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
=======
import CharacterMarquee from 'components/characterMarquee';
import EquipmentList from 'components/equipmentList';
import DetailsTabs from 'components/characterDetails';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    margin: '.75em',
    padding: '.55em',
    backgroundColor: 'rgba(27, 13, 24, .5)',
    display: 'flex',
    flex: 1,
    color: '#fff',
    overflow: 'hidden',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
  left: {
    flex: 3.9,
    margin: '.2em .35em .2em .2em',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
  right: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '.2em .2em .2em .35em',
    overflow: 'hidden',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
  main: {
    margin: '0 0 0 0',
    flex: 1,
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
}, { name: 'Mui_Styles_Items' });

const Items = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div>
          <CharacterMarquee />
        </div>
        <div className={classes.main}>
          <EquipmentList />
        </div>
      </div>
      <div className={classes.right}>
        <DetailsTabs />
      </div>
    </div>
  );
};

export default Items;
>>>>>>> origin/dev
