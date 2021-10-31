import { Select, MenuItem } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: '#fff',
    width: props => props.width ?? '100%',
    paddingLeft: '10px',
    maxWidth: '200px',
    fontFamily: 'inherit',
    fontSize: '14px',
    background: props => props?.background ?? 'unset',
    border: props => props?.border ?? 'unset',
    borderRadius: props => props?.borderRadius ?? 'unset',
    '& .MuiSelect-select': {
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
    value = props.value,
    name,
  } = props;
  const classes = useStyles(props);

  return (
    <Select
      className={classes.root}
      style={{ cursor: 'default' }}
      value={value}
      renderValue={value => name ?? value}
      name={name}
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
      {defaultText && (
        <MenuItem key="none" value={defaultText} style={{ fontStyle: 'italic' }}>{defaultText}</MenuItem>
      )}
      {options?.map(option => (
        <MenuItem key={option?.value} value={option?.value}>{option?.label || option?.name}</MenuItem>
      ))}
    </Select>
  );
};

HubSelect.propTypes = {
  defaultText: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.shape({}),
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
};

export default HubSelect;
