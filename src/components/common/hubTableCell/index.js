import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(props => ({
  root: {
    display: 'flex',
    width: 'inherit',
    height: 35,
    padding: props => props.cellPadding ?? 'unset',
    justifyContent: 'center',
    alignItems: 'center',
    // fontStyle: props => props.fontStyle ?? 'inherit',
    // textTransform: props => props.textTransform ?? 'capitalize',
  },
  [props.className]: {
    ...props.className,
  },
}), { name: 'Mui_Styles_huTabbleCell' });

const HubTableCell = props => {
  const { className = {}, label, text = '' } = props;
  const classes = useStyles(props);

  return (
    <div className={`${classes.root} ${className}`} data-value={label}>
      {text}
    </div>
  );
};

HubTableCell.propTypes = {
  label: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default HubTableCell;
