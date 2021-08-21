import BackgroundImage from 'components/BackgroundImage/BackgroundImage';
import NavBar from 'components/NavBar/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '../Toolbar/Toolbar';

const useStyles = makeStyles({
  root: {
    margin: '1em',
    backgroundColor: 'rgba(27, 13, 24, .5)',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    color: '#fff',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
}, { name: 'Mui_Styles_Hub' });

const Hub = () => {
  const classes = useStyles();

  return (
    <BackgroundImage>
      <NavBar />
      <Toolbar />
      <div className={classes.root}>
        container
      </div>
    </BackgroundImage>
  );
};

export default Hub;
