import Image from 'next/image';
import styles from './Logo.module.css';
import logo from '../../../public/logo.png';

const Logo = props => {
  return (
    <div className={styles.logo}>
      <Image src={logo} alt="" />
    </div>
  )
}

export default Logo;
