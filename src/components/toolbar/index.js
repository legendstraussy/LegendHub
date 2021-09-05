import HubButton from 'components/common/hubButton';
import HubVersion from 'components/hubVersion';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    margin: '.75em 1em 1.5em 7.5em',
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
        <HubButton label="New" type="primary" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Undo" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Import" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Export" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Clear" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Delete" type="warning" onClick={() => {}} />
      </div>
      <HubVersion />
    </div>
  );
};

export default Toolbar;
