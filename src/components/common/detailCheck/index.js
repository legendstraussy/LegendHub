import { PropTypes } from 'prop-types';
import DetailField from 'components/common/detailField';
import HubCheckbox from 'components/common/hubCheckbox';

const DetailCheck = props => {
  const { label, onChange, value = false } = props;

  return (
    <DetailField
      label={label}
      value={(
        <HubCheckbox
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};

DetailCheck.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

export default DetailCheck;
