import { Checkbox } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    cursor: 'default',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 3,
    display: 'flex',
    width: 18,
    height: 18,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#222',
    border: '1px solid rgba(105, 85, 85, .75)',
    'input:hover ~ &': {
      backgroundColor: '#222',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(105, 85, 85, 1)',
    },
  },
  checkedIcon: {
    backgroundColor: '#222',
    '&:before': {
      display: 'block',
      width: 18,
      height: 18,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath"
        + " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 "
        + "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
  },
}, { name: 'Mui_Styles_HubCheckbox' });

const HubCheckbox = props => {
  const {
    onChange,
    value,
  } = props;
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      checked={value}
      checkedIcon={<span className={`${classes.icon} ${classes.checkedIcon}`} />}
      disableRipple
      icon={<span className={classes.icon} />}
      onChange={event => onChange(event.target.checked)}
    />
  );
};

HubCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default HubCheckbox;
