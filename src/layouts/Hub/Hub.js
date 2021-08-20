import BackgroundImage from "components/BackgroundImage/BackgroundImage";
import NavBar from 'components/NavBar/NavBar';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  toolbar: {
    margin: '1em 0 1em 8em',
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
  }
});

const HubButton = props => {
  const classes = useStyles();
  const { label, onClick, type } = props;

  return (
    <Button onClick={onClick} className={`${classes.button} ${type}`}>{label}</Button>
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
    </div>
  )
}

const Hub = props => {
  return (
    <BackgroundImage>
      <NavBar />
      <Toolbar />
    </BackgroundImage>
  )
}

export default Hub;
