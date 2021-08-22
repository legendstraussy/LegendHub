import CharacterSelect from 'components/CharacterSelect/CharacterSelect';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: '.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .75)',
    borderRadius: '5px',
  },
}, { name: 'Mui_Styles_CharacterMarquee' });

const CharacterMarquee = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CharacterSelect />
      <div>hp mv ma</div>
      <div>stats</div>
      <div>ac align rent</div>
      <div>melee stats</div>
      <div>spell stats</div>
      <div>regen stats</div>
    </div>
  );
};

export default CharacterMarquee;
