import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 35,
    fontFamily: 'Open Sans',
    fontSize: '14px',
    border: '1px solid rgba(105, 85, 85, .75)',
    display: 'flex',
    padding: '4px 10px',
    background: '#222222',
    borderRadius: 5,
    color: '#fff',
    outline: 'unset',
  },
}, { name: 'Mui_Styles_HubInput' });

const HubInput = props => {
  const { onChange, value } = props;
  const classes = useStyles();

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={classes.root}
    />
  );
};

HubInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default HubInput;
