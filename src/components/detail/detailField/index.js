import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import DetailFieldLabel from '../detailFieldLabel';
import DetailFieldValue from '../detailFieldValue';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'space-between',
    maxWidth: '50%',
    margin: '0 8px',
  },
}, { name: 'Mui_Styles_DetailField' });

const DetailField = props => {
  const { label, value } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DetailFieldLabel label={label} />
      <DetailFieldValue value={value} />
    </div>
  );
};

DetailField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default DetailField;
