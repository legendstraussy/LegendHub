import { useState } from 'react';
import CharacterMarquee from 'components/characterMarquee';
import EquipmentList from 'components/equipmentList';
import ItemList from 'components/itemList';
import DetailsTabs from 'components/characterDetails';
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
}, { name: 'Mui_Styles_Builder' });

const Builder = () => {
  const classes = useStyles();
  const [test, setTest] = useState(false);

  return (
    <HubLayout>
      <div className={classes.root}>
        <div className={classes.left}>
          <div style={{ display: 'flex' }}>
            {test
              ? <div>Selected Item here</div>
              : <CharacterMarquee  />
            }
          </div>
          <div className={classes.main}>
            {test
              ? <ItemList setTest={() => setTest(false)} />
              : <EquipmentList setTest={() => setTest(true)} />
            }
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
