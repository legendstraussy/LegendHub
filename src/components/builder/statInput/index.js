import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: 45,
    height: 30,
    color: '#fff',
    display: 'flex',
    padding: 4,
    background: '#222222',
    border: '1px solid rgba(105, 85, 85, .75)',
    borderRadius: 5,
    fontFamily: 'Titillium Web',
    fontSize: 12,
    outline: 'unset',
  },
}, { name: 'Mui_Styles_StatInput' });

const StatInput = props => {
  const { updateStat, stat } = props;
  const [value, setValue] = useState(stat || 0);
  const classes = useStyles();

  useEffect(() => {
    if (!stat) setValue(0);
    if (stat >= 0) {
      setValue(stat);
    }
  }, [stat]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value === stat) return;
      if (value === '') return;
      if (value >= 0) {
        updateStat(value);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [stat, updateStat, value]);

  const handleOnChange = event => {
    let value = parseInt(event.target.value, 10);
    if (value >= 0) {
      if (value > 50) {
        value = 50;
      }
      setValue(value);
    } else {
      setValue('');
    }
  };

  return (
    <input
      type="number"
      min="0"
      max="50"
      value={value}
      onChange={handleOnChange}
      className={classes.root}
    />
  );
};

StatInput.propTypes = {
  stat: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  updateStat: PropTypes.func,
};

export default StatInput;
