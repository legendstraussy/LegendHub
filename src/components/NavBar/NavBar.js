import Logo from '../Logo/Logo';
import NavItem from '../NavItem/NavItem';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <NavItem label="Builder" />
      <NavItem label="Items" />
    </div>
  )
}

export default NavBar