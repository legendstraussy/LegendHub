import { makeStyles } from '@material-ui/styles';
import HubLogo from 'components/common/hubLogo';
import NavLink from '../hubNavLink';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    backgroundColor: 'rgba(6, 100, 187, .8)',
    color: '#fff',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
}, { name: 'Mui_Styles_NavBar' });

const NavBar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <HubLogo />
      <NavLink label="builder" link="/" />
      <NavLink label="items" link="/items" />
    </nav>
  );
};

export default NavBar;
