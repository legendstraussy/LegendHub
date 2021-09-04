import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
  },
}, { name: 'Mui_Styles_CharElectiveModifiers' });

const CharElectiveModifiers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      CharElectiveModifiers
    </div>
  );
};

export default CharElectiveModifiers;
