import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: 'inherit',
    height: 35,
    // padding: props => props.cellPadding ?? 'unset',
    justifyContent: 'center',
    alignItems: 'center',
  },
}, { name: 'Mui_Styles_huTableCell' });

const HubTableCell = props => {
  const { className, label, text = '' } = props;
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${className}`} data-value={label}>
      {text}
    </div>
  );
};

HubTableCell.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default HubTableCell;
