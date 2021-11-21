import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: 'url(\'/background.webp\')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}, { name: 'Mui_Styles_BackgroundImage' });

const BackgroundImage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} />
  );
};

export default BackgroundImage;
