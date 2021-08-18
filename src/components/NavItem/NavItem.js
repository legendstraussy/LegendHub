import styles from './NavItem.module.css';

const NavItem = props => {
  const { label } = props;

  return (
    <div className={styles.item}>{label}</div>
  )
}

export default NavItem;
