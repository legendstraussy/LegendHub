import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: props => props.justifyContent ?? 'center',
    color: '#fff',
    padding: '0 10px',
    fontSize: 10,
    textTransform: 'uppercase',
    userSelect: 'none',
  },
}, { name: 'Mui_Styles_hubTableHeader' });

const HubTableHeader = props => {
  const { className, id, label } = props;
  const classes = useStyles();

  return (
    <div
      className={`${classes.root} ${className}`}
      data-value={id}
    >
      {label}
    </div>
  );
};

HubTableHeader.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};

export default HubTableHeader;
