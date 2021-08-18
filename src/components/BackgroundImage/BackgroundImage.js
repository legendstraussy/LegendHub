import styles from './BackgroundImage.module.css';

const BackgroundImage = ({ children }) => {
  return (
    <div className={styles.image}>
      { children }
    </div>
  )
}

export default BackgroundImage