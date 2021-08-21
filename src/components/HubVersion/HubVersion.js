import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  label: {
    fontFamily: 'inherit',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  version: {
    fontFamily: 'inherit',
    fontSize: 18,
    fontWeight: 'unset',
  },
}, { name: 'Mui_Styles_HubVersion' });

const HubVersion = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.label}>Builder</span>
      &nbsp;
      <span className={classes.version}>v1.0.2</span>
    </div>
  );
};

export default HubVersion;
