import Toolbar from 'components/Toolbar/Toolbar';
import CharacterMarquee from 'components/CharacterMarquee/CharacterMarquee';
import EquipmentList from 'components/EquipmentList/EquipmentList';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    margin: '.8em',
    padding: '.4em',
    backgroundColor: 'rgba(27, 13, 24, .5)',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    color: '#fff',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  left: {
    flex: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '20%',
  },
  marquee: {
    height: '42px',
    margin: '.4em',
    display: 'flex',
  },
  main: {
    margin: '.4em',
    flex: 1,
  },
  details: {
    margin: '.4em',
    flex: 1,
  },
}, { name: 'Mui_Styles_MainContainer' });

const MainContainer = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar />
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.left}>
            <div className={classes.marquee}>
              <CharacterMarquee />
            </div>
            <div className={classes.main}>
              <EquipmentList />
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.details}>details</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
