import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import DetailFieldLabel from 'components/common/detail/detailField/detailFieldLabel';
import DetailFieldValue from 'components/common/detail/detailField/detailFieldValue';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: props => props.alignItems ?? 'baseline',
    justifyContent: props => props.justifyContent ?? 'flex-end',
    maxWidth: props => props?.maxWidth ?? '50%',
    padding: 8,
  },
}, { name: 'Mui_Styles_DetailField' });

const DetailField = props => {
  const { hideColon, label, value } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <DetailFieldLabel label={label} hideColon={hideColon} />
      <DetailFieldValue value={value} />
    </div>
  );
};

DetailField.propTypes = {
  hideColon: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default DetailField;
