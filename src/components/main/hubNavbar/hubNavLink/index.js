import { PropTypes } from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: '0 .75em',
    fontFamily: 'Titillium Web',
    fontSize: '18px',
    fontWeight: '100',
    cursor: 'default',
    '& a': {
      textTransform: 'capitalize',
      '&:hover': {
        cursor: 'default',
        borderBottom: '2px solid rgba(255, 255, 255, .5)',
        color: 'rgba(255, 255, 255, .8)',
      },
    },
  },
}, { name: 'Mui_Styles_NavLink' });

const NavLink = props => {
  const classes = useStyles();
  const { label = '', link } = props;

  return (
    <div className={classes.root}>
      <Link href={link}>
        {label}
      </Link>
    </div>
  );
};

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavLink;
