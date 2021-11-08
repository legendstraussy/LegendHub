import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: '#fff',
    padding: '0 10px',
    fontSize: 10,
    textTransform: 'uppercase',
    userSelect: 'none',
    justifyContent: props => props.justifyContent ?? 'center',
  },
}, { name: 'Mui_Styles_hubTableHeader' });

const HubTableHeader = props => {
  const { className, id, label } = props;
  const classes = useStyles(props);

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
