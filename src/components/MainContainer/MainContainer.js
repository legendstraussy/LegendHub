import Toolbar from 'components/Toolbar/Toolbar';
import CharacterMarquee from 'components/CharacterMarquee/CharacterMarquee';
import EquipmentList from 'components/EquipmentList/EquipmentList';
import DetailsTabs from 'components/DetailsTabs/DetailsTabs';
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
}, { name: 'Mui_Styles_MainContainer' });

const MainContainer = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar />
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
    </>
  );
};

export default MainContainer;
