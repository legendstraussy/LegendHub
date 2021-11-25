import { PropTypes } from 'prop-types';
import HubSelect from 'components/common/hubSelect';
import DetailField from 'components/common/detailField';

const DetailSelect = props => {
  const { defaultText, label = '', onChange, options, value } = props;

  return (
    <DetailField
      label={label}
      value={(
        <HubSelect
          defaultText={defaultText}
          onChange={onChange}
          options={options}
          value={value || defaultText}
        />
      )}
    />
  );
};

DetailSelect.propTypes = {
  defaultText: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

export default DetailSelect;
