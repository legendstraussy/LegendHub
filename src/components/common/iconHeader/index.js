import { PropTypes } from 'prop-types';
import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';
import { STATS_SCHEMA } from 'data/constants';

const useStyles = makeStyles({
  root: {
    width: props => props?.width || 40,
    position: 'absolute',
    top: -15,
    bottom: 0,
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#222',
    borderTopLeftRadius: props => props.leftEnd ? '5px' : 'unset',
    borderTopRightRadius: props => props.rightEnd ? '5px' : 'unset',
    userSelect: 'none',
    cursor: 'default',
    '& div:first-child': {
      overflow: 'unset !important',
    },
  },
  icon: {
    position: 'absolute',
    top: '-10px !important',
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
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    color: props => STATS_SCHEMA[props?.label]?.color || '#fff',
    position: 'relative',
    top: 5,
    fontSize: '10px',
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_IconHeader' });

const IconHeader = props => {
  const { iconPath, isSorting, label, order } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {iconPath
        && <div style={{ position: 'relative', display: 'contents' }}><Image src={iconPath} alt="" priority layout="fill" className={classes.icon} /></div>}
      <div className={classes.label}>
        {label}
        {isSorting && order
          ? order === 'asc' ? <span>&#10225;</span> : <span>&#10224;</span>
          : null}
      </div>
    </div>
  );
};

IconHeader.propTypes = {
  iconPath: PropTypes.string,
  isSorting: PropTypes.bool,
  label: PropTypes.string,
  order: PropTypes.string,
};

export default IconHeader;
