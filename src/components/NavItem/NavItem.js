import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: '0 .75em',
    fontSize: '10pt',
    textTransform: 'uppercase',
    cursor: 'default',
  },
}, { name: 'Mui_Styles_NavItem' });

const NavItem = props => {
  const classes = useStyles();
  const { label = '' } = props;

  return (
    <div className={classes.root}>{label}</div>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default NavItem;
