import { PropTypes } from 'prop-types';
import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    background: '#222222',
    border: '1px solid rgba(105, 85, 85, .75)',
    borderRadius: '5px',
    padding: '.5px',
    '&:active': {
      background: 'rgba(46, 40, 40, 0.25)',
    },
  },
}, { name: 'Mui_Styles_HubIconButton' });

const HubIconButton = props => {
  const { iconPath, onClick } = props;
  const classes = useStyles();

  return (
    <div role="button" tabIndex={0} className={classes.root} onClick={onClick}>
      <Image src={iconPath} width={32} height={32} layout="fixed" alt="" className={classes.icon} />
    </div>
  );
};

HubIconButton.propTypes = {
  iconPath: PropTypes.string,
  onClick: PropTypes.func,
};

export default HubIconButton;
