import Logo from '../Logo/Logo';
import NavItem from '../NavItem/NavItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(6, 100, 187, .8)',
    color: '#fff',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  }
}, { name: "Mui_Styles_NavBar" });

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Logo />
      <NavItem label="Builder" />
      <NavItem label="Items" />
    </div>
  )
}

export default NavBar;
