import { PropTypes } from 'prop-types';
// import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}, { name: 'Mui_Styles_HubItemTool' });

const HubItemTool = props => {
  const classes = useStyles(props);

  return (
    <span className={classes.root}>
      {props.children}
    </span>
  );
};

HubItemTool.propTypes = {
  children: PropTypes.node,
};

export default HubItemTool;
