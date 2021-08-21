import BackgroundImage from "components/BackgroundImage/BackgroundImage";
import NavBar from 'components/NavBar/NavBar';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  toolbar: {
    margin: '1em 1em 1em 8em',
    display: 'flex',
  },
  buttonLayout: {
    margin: '0 .4em',
  },
  button: {
    '&.primary': {
      backgroundColor: '#1772BE',
    },
    '&.default': {
      backgroundColor: '#171318',
    },
    '&.warning': {
      backgroundColor: '#DE2E2E',
    },
    fontFamily: 'inherit',
    fontSize: '12px',
    fontWeight: 'bolder',
    color: '#fff',
    padding: '.4em 1.75em',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
  hubLabel: {
    fontFamily: 'inherit',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  hubVersionContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  hubVersion: {
    fontFamily: 'inherit',
    fontSize: 18,
    fontWeight: 'unset',
  },
  container: {
    margin: '1em',
    backgroundColor: 'rgba(27, 13, 24, .5)',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    color: '#fff',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  }
}, { name: "Mui_Styles_Hub" });

const HubButton = props => {
  const classes = useStyles();
  const { label, onClick, type } = props;

  return (
    <Button onClick={onClick} className={`${classes.button} ${type}`}>{label}</Button>
  ) 
}

const HubVersion = () => {
  const classes = useStyles();

  return (
    <div className={classes.hubVersionContainer}>
      <span className={classes.hubLabel}>Builder</span>&nbsp;
      <span className={classes.hubVersion}>v1.0.2</span>
    </div>
  )
}

const Toolbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <div className={classes.buttonLayout}>
        <HubButton label="New" type="primary" onClick={() => console.log('bingo new')} />
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
  )
}

const Hub = props => {
  const classes = useStyles();

  return (
    <BackgroundImage>
      <NavBar />
      <Toolbar />
      <div className={classes.container}>
        container
      </div>
    </BackgroundImage>
  )
}

export default Hub;
