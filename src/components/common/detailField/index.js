import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import DetailFieldLabel from 'components/common/detailField/detailFieldLabel';
import DetailFieldValue from 'components/common/detailField/detailFieldValue';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: props => props.justifyContent ?? 'unset',
    alignItems: props => props.alignItems ?? 'baseline',
    padding: props => props?.padding ?? 'unset',
  },
}, { name: 'Mui_Styles_DetailField' });

const DetailField = props => {
  const { hideColon, label, value, labelFlex, valueFlex } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <DetailFieldLabel label={label} flex={labelFlex} hideColon={hideColon} />
      <DetailFieldValue value={value} flex={valueFlex} />
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
  labelFlex: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]),
  valueFlex: PropTypes.string,
};

export default DetailField;
