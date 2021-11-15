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
  const {
    max, min, stat, updateStat,
  } = props;
  const [value, setValue] = useState(stat || 0);
  const classes = useStyles();

  useEffect(() => {
    if (!stat) setValue(0);
    if (stat >= min) {
      setValue(stat);
    }
  }, [min, stat]);

  useEffect(() => {
    const statValue = parseInt(value, 10);
    const timer = setTimeout(() => {
      if (statValue === stat) return;
      if (statValue >= min) {
        updateStat(statValue);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [min, stat, updateStat, value]);

  const handleOnChange = event => {
    let value = parseInt(event.target.value, 10);
    if (value >= min) {
      if (value > max) {
        value = max;
      }
      setValue(value);
    } else {
      setValue('');
    }
  };

  return (
    <input
      type="number"
      min={min}
      max={max}
      value={value}
      onChange={handleOnChange}
      className={classes.root}
    />
  );
};

StatInput.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  stat: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  updateStat: PropTypes.func,
};

export default StatInput;
