import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flex: props => props?.flex ?? 'inherit',
    fontSize: 12,
    fontWeight: 100,
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_DetailFieldLabel' });

const DetailFieldLabel = props => {
  const { label, hideColon = false } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {label}
      {!hideColon && <span>:</span>}
    </div>
  );
};

DetailFieldLabel.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]),
  hideColon: PropTypes.bool,
};

export default DetailFieldLabel;
