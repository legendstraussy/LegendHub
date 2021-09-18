import { Select, MenuItem } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: '#fff',
    width: '100%',
    height: 35,
    fontFamily: 'inherit',
    fontSize: '14px',
    minWidth: '100px',
    background: '#222222',
    border: '1px solid rgba(105, 85, 85, .75)',
    borderRadius: '5px',
    padding: '0 10px',
    '& .MuiSelect-select': {
      position: 'relative',
      left: '-10px',
      paddingLeft: '10px',
      marginRight: '-20px',
      cursor: 'default',
    },
    '&:before, &:after': {
      border: 'unset',
      content: 'unset',
    },
    '& .MuiSelect-icon': {
      color: '#219AFF',
    },
  },
}, { name: 'Mui_Styles_HubSelect' });

const HubSelect = props => {
  const {
    defaultText,
    options,
    onChange,
    value = props?.value ?? defaultText,
  } = props;
  const classes = useStyles();

  return (
    <Select
      className={classes.root}
      style={{ cursor: 'default' }}
      value={value}
      onChange={event => onChange(event.target.value)}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        getContentAnchorEl: null,
      }}
    >
      <MenuItem key="none" value={defaultText} style={{ fontStyle: 'italic' }}>{defaultText}</MenuItem>
      {options?.map(option => (
        <MenuItem key={option?.value} value={option?.value}>{option?.name}</MenuItem>
      ))}
    </Select>
  );
};

HubSelect.propTypes = {
  defaultText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
};

export default HubSelect;
