import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: -20,
    display: 'flex',
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    marginTop: '-5px',
    fontFamily: 'Titillium Web',
  },
  label: {
    fontFamily: 'inherit',
    fontSize: '17px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  version: {
    fontFamily: 'inherit',
    fontSize: '14px',
    fontWeight: 300,
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
