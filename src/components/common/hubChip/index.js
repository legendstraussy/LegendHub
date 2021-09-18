import { PropTypes } from 'prop-types';
import { Avatar, Chip } from '@material-ui/core';
import { Remove } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    height: '25px !important',
    color: props => props.color ?? 'rgba(0, 0, 0, .75);',
    background: props => props.bgColor ?? '#444',
    fontFamily: 'Open Sans',
    fontSize: '12px',
    fontWeight: 800,
    textTransform: 'uppercase',
    cursor: 'default',
  },
  avatar: {
    background: '#ccc',
    width: '18px !important',
    height: '18px !important',
    marginLeft: '2px !important',
  },
  icon: {
    color: '#000',
    width: '12px',
  },
}, { name: 'Mui_Styles_HubChip' });

const HubChip = props => {
  const { label = 'new chip', onDelete, readOnly = false } = props;
  const classes = useStyles(props);

  return (
    <Chip
      avatar={(
        <>
          {!readOnly
            ? (
              <Avatar onClick={onDelete} className={classes.avatar}>
                <Remove className={classes.icon} />
              </Avatar>
            )
            : null }
        </>
      )}
      className={classes.root}
      label={label}
      variant="outlined"
    />
  );
};

HubChip.propTypes = {
  label: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
};

export default HubChip;
