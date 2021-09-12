import { PropTypes } from 'prop-types';
import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 40,
    position: 'absolute',
    top: -15,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#222',
    borderTopLeftRadius: props => props.leftEnd ? '5px' : 'unset',
    borderTopRightRadius: props => props.rightEnd ? '5px' : 'unset',
    '& div:first-child': {
      overflow: 'unset !important',
    },
  },
  icon: {
    position: 'absolute',
    top: '15px !important',
    left: 0,
    bottom: 0,
    right: 0,
    padding: 0,
    width: '32px !important',
    height: '32px !important',
    minWidth: 'unset !important',
    minHeight: 'unset !important',
    maxWidth: 'unset !important',
    maxHeight: 'unset !important',
  },
  label: {
    color: props => theme.palette.stats[props.label] || '#fff',
    position: 'relative',
    top: 4,
    fontSize: '10px',
    textTransform: 'uppercase',
  },
}), { name: 'Mui_Styles_IconHead' });

const IconHead = props => {
  const { iconPath, label } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Image src={iconPath} alt="" width={32} height={32} layout="fixed" className={classes.icon} />
      <div className={classes.label}>
        {label}
      </div>
    </div>
  );
};

IconHead.propTypes = {
  iconPath: PropTypes.string,
  label: PropTypes.string,
};

export default IconHead;
