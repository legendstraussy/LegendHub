// import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flex: 1,
    overflow: 'auto',
  },
}, { name: 'Mui_Styles_CharacterDetails' });

const CharacterDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        
      </div>
    </div>
  );
};

export default CharacterDetails;
