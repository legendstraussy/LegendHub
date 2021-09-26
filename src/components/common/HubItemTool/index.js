import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: 'rgba(66, 60, 60, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: '0 .2em',
    '& :hover': {
      color: props => props?.color ?? '#ccc',
    },
  },
}, { name: 'Mui_Styles_HubItemTool' });

const HubItemTool = props => {
  const { onClick } = props;
  const classes = useStyles(props);

  return (
    <span className={classes.root} role="button" tabIndex={0} onClick={onClick}>
      {props.children}
    </span>
  );
};

HubItemTool.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default HubItemTool;
