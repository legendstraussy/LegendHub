import { PropTypes } from 'prop-types';
// import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: props => props.show ? 'flex' : 'none',
  },
}, { name: 'Mui_Styles_HubItemTools' });

const HubItemTools = props => {
  const classes = useStyles(props);

  return (
    <span className={classes.root}>
      {props.children}
    </span>
  );
};

HubItemTools.propTypes = {
  children: PropTypes.node,
};

export default HubItemTools;
