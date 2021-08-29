import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    marginTop: '-5px',
  },
  label: {
    fontFamily: 'inherit',
    fontSize: '17px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  version: {
    fontFamily: 'inherit',
    fontSize: '14px',
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
