import HubButton from 'components/HubButton/HubButton';
import HubVersion from 'components/HubVersion/HubVersion';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    margin: '1em 1em 1em 8em',
    display: 'flex',
  },
  buttonLayout: {
    margin: '0 .4em',
  },
}, { name: 'Mui_Styles_Toolbar' });

const Toolbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.buttonLayout}>
        <HubButton label="New" type="primary" />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Undo" type="default" />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Import" type="default" />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Export" type="default" />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Clear" type="default" />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Delete" type="warning" />
      </div>
      <HubVersion />
    </div>
  );
};

export default Toolbar;
