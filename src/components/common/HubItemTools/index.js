import { PropTypes } from 'prop-types';
// import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '45%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    background: '#222',
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
