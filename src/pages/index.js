import CharacterMarquee from 'components/characterMarquee';
import EquipmentList from 'components/equipmentList';
import DetailsTabs from 'components/characterDetails';
import HubLayout from 'layouts/hub';
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
  },
  left: {
    maxWidth: '80%',
    margin: '.2em .35em .2em .2em',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  right: {
    minWidth: '20%',
    maxWidth: '300px',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '.2em .2em .2em .35em',
    overflow: 'hidden',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 0 0',
    overflow: 'hidden',
  },
}, { name: 'Mui_Styles_Builder' });

const Builder = () => {
  const classes = useStyles();

  return (
    <HubLayout>
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
    </HubLayout>
  );
};

export default Builder;
