import { PropTypes } from 'prop-types';
import HubSelect from 'components/common/hubSelect';
import { makeStyles } from '@material-ui/styles';
import DetailField from 'components/common/detailField';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    marginBottom: '1em',
  },
}, { name: 'Mui_Styles_QuestSelect' });

const QuestSelect = props => {
  const classes = useStyles();
  const [defaultText] = useState('Select a quest');

  return (
    <main className={classes.root}>
      <DetailField
        label={props.label}
        value={(
          <HubSelect
            defaultText={defaultText}
            onChange={props.onChange}
            options={props.options}
            value={props.value || defaultText}
          />
        )}
      />
    </main>
  );
};

QuestSelect.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  value: PropTypes.string,
};

export default QuestSelect;
