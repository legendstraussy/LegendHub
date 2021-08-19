import BackgroundImage from "components/BackgroundImage/BackgroundImage";
import NavBar from 'components/NavBar/NavBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  toolbar: {
    margin: '1em 0 1em 8em',
    backgroundColor: 'red',
    display: 'flex',
  },
});

const Toolbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>Toolbar</div>
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
