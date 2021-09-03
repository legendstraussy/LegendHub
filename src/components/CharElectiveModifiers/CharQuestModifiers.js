import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
  },
}, { name: 'Mui_Styles_CharQuestModifiers' });

const CharQuestModifiers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      CharQuestModifiers
    </div>
  );
};

export default CharQuestModifiers;
