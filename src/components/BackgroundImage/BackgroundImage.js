import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundImage: 'url(\'/background.png\')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  },
}, { name: 'Mui_Styles_BackgroundImage' });

const BackgroundImage = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      { children }
    </div>
  );
};

BackgroundImage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundImage;
