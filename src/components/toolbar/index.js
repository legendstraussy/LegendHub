import HubButton from 'components/common/hubButton';
import HubVersion from 'components/hubVersion';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: -5,
    display: 'flex',
    padding: 0,
    margin: '30px 13px 0px 125px',
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
