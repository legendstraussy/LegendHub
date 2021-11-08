import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import HubItemTools from 'components/common/HubItemTools';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 'inherit',
    height: 35,
    alignItems: 'center',
    '&:hover': {
      '& .Mui_Styles_hubTooledCell-tools': {
        color: 'red',
        opacity: '1 !important',
        width: 'max-content !important',
        transition: 'opacity .2s ease-in-out',
      },
    },
  },
  label: {
    color: theme.palette.link,
    padding: '0 10px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  tools: {
    width: 0,
    height: 'inherit',
    opacity: 0,
  },
}), { name: 'Mui_Styles_hubTooledCell' });

const HubTooledCell = React.memo(props => {
  const { label, text, tools } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.label} data-value={label}>
        {text}
      </div>
      <div className={classes.tools}>
        <HubItemTools tools={tools} {...props} />
      </div>
    </div>
  );
});

HubTooledCell.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  tools: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

export default HubTooledCell;
