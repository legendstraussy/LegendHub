import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    '& img:first-child': {
      display: 'none !important',
    },
    background: '#222222',
    border: '1px solid rgba(105, 85, 85, .75)',
    borderRadius: '5px',
    padding: '2px',
    '&:active': {
      background: 'rgba(46, 40, 40, 0.25)',
    },
  },
  icon: {
    position: 'relative !important',
    width: '32px !important',
    height: '32px !important',
    minWidth: 'unset !important',
    maxWidth: 'unset !important',
    minHeight: 'unset !important',
    maxHeight: 'unset !important',
  },
}, { name: 'Mui_Styles_IconButton' });

const IconButton = props => {
  const { icon } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image src={icon} alt="" className={classes.icon} />
    </div>
  );
};

export default IconButton;
