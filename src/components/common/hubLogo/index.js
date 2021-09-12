import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: '40px',
    display: 'block',
  },
  logo: {
    width: '128px !important',
    height: '128px !important',
    maxWidth: 'unset !important',
    maxHeight: 'unset !important',
  },
}, { name: 'Mui_Styles_Logo' });

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image
        src="/logo.png"
        alt="Logo"
        width={128}
        height={128}
        layout="fixed"
        className={classes.logo}
      />
    </div>
  );
};

export default Logo;
