import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';
import logo from '/public/logo.png';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: '40px',
    display: 'block',
  },
  logo: {
    width: '145px !important',
    height: '145px !important',
    maxWidth: 'unset !important',
    maxHeight: 'unset !important',
  },
}, { name: 'Mui_Styles_Logo' });

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image src={logo} alt="" className={classes.logo} />
    </div>
  );
};

export default Logo;
