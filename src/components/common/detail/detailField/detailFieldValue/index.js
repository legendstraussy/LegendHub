import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'inherit',
    fontSize: '14px',
    fontWeight: '100',
    flex: 1,
  },
}, { name: 'Mui_Styles_DetailFieldValue' });

const DetailFieldValue = props => {
  const { value } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>{value}</div>
  );
};

DetailFieldValue.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default DetailFieldValue;
