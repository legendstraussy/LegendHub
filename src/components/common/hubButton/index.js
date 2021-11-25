import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    height: 35,
    minWidth: 90,
    color: '#fff',
    padding: '.6em 2em',
    fontFamily: 'Titillium Web',
    fontSize: '12px',
    fontWeight: 500,
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
    cursor: 'default',
    '&.primary': {
      backgroundColor: '#474747',
    },
    '&.default': {
      backgroundColor: '#171318',
    },
    '&.warning': {
      backgroundColor: '#DE2E2E',
    },
    '&.Mui-disabled': {
      backgroundColor: '#171318 !important',
      color: '#6a6464bd',
      fontStyle: 'italic',
    },
  },
}, { name: 'Mui_Styles_HubButton' });

const HubButton = props => {
  const classes = useStyles();
  const {
    autoFocus = false,
    disabled = false,
    label,
    onClick,
    submit,
    type = 'default',
  } = props;

  return (
    <Button disableFocusRipple autoFocus={autoFocus} disabled={disabled} type={submit ? 'submit' : 'button'} onClick={onClick} className={`${classes.button} ${type}`}>{label}</Button>
  );
};

HubButton.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  type: PropTypes.string,
};

export default HubButton;
