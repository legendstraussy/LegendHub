import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    cursor: 'default',
    '&.primary': {
      backgroundColor: '#1772BE',
    },
    '&.default': {
      backgroundColor: '#171318',
    },
    '&.warning': {
      backgroundColor: '#DE2E2E',
    },
    fontFamily: 'Titillium Web',
    fontSize: '12px',
    fontWeight: 500,
    color: '#fff',
    padding: '.6em 2em',
    // boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
}, { name: 'Mui_Styles_HubButton' });

const HubButton = props => {
  const classes = useStyles();
  const { label, onClick, type } = props;

  return (
    <Button onClick={onClick} className={`${classes.button} ${type}`}>{label}</Button>
  );
};

HubButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default HubButton;
