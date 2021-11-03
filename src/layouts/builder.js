import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    margin: '1.25em .75em .75em .75em',
    padding: '.55em',
    backgroundColor: 'rgba(27, 13, 24, .5)',
    display: 'flex',
    flex: 1,
    color: '#fff',
    overflow: 'hidden',
  },
  main: {
    maxWidth: '80%',
    margin: '.2em .35em .2em .2em',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  },
  side: {
    maxWidth: '20%',
    minWidth: '300px',
    display: 'flex',
    flex: 1,
    margin: '.2em .2em .2em .35em',
    overflow: 'hidden',
  },
}, { name: 'Mui_Styles_Builder' });

const Builder = props => {
  const { children, side } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        {children}
      </div>
      <div className={classes.side}>
        {side}
      </div>
    </div>
  );
};

Builder.propTypes = {
  children: PropTypes.node,
  side: PropTypes.node,
};

export default Builder;
