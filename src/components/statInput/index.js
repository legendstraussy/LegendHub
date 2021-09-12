import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: 45,
    height: 30,
    fontFamily: 'Open Sans',
    fontSize: '12px',
    border: '1px solid rgba(105, 85, 85, .75)',
    display: 'flex',
    padding: '4px',
    background: '#222222',
    borderRadius: '5px',
    color: '#fff',
    outline: 'unset',
  },
}, { name: 'Mui_Styles_StatInput' });

const StatInput = props => {
  const { stat } = props;
  const [value, setValue] = useState(stat);
  const classes = useStyles();

  return (
    <input
      type="number"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      className={classes.root}
    />
  );
};

StatInput.propTypes = {
  stat: PropTypes.shape({
    final: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default StatInput;
