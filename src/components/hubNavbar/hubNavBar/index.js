import { makeStyles } from '@material-ui/styles';
import HubLogo from 'components/common/hubLogo';
import NavItem from 'components/hubNavbar/hubNavItem';

const useStyles = makeStyles({
  root: {
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
      <NavItem label="Builder" />
      <NavItem label="Items" />
    </nav>
  );
};

export default NavBar;
