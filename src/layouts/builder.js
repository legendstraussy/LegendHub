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
  left: {
    maxWidth: '80%',
    margin: '.2em .35em .2em .2em',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  },
  right: {
    maxWidth: '20%',
    minWidth: '300px',
    display: 'flex',
    flex: 1,
    margin: '.2em .2em .2em .35em',
    overflow: 'hidden',
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '0 0 0 0',
    overflow: 'hidden',
  },
  marquee: {
    display: 'flex',
  },
}, { name: 'Mui_Styles_Builder' });

const Builder = props => {
  const { main, marquee, side } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.marquee}>
          {marquee}
        </div>
        <div className={classes.main}>
          {main}
        </div>
      </div>
      <div className={classes.right}>
        {side}
      </div>
    </div>
  );
};

Builder.propTypes = {
  main: PropTypes.node,
  marquee: PropTypes.node,
  side: PropTypes.node,
};

export default Builder;
