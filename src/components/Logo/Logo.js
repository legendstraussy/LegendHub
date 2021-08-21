import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';
import logo from '../../../public/logo.png';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: '40px',
    display: 'block',
  },
}, { name: 'Mui_Styles_Logo' });

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image src={logo} alt="" />
    </div>
  );
};

export default Logo;
