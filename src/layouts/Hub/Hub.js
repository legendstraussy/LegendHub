import BackgroundImage from "components/BackgroundImage/BackgroundImage";
import NavBar from 'components/NavBar/NavBar';
import styles from './Toolbar.module.css';

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>Toolbar</div>
  )
}

const Hub = props => {
  return (
    <BackgroundImage>
      <NavBar />
      <Toolbar />
    </BackgroundImage>
  )
}

export default Hub;
