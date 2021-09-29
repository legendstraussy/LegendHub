import { PropTypes } from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(({
  actions: {
    width: 205,
    display: 'flex',
    justifyContent: 'space-between',
  },
}), { name: 'Mui_Styles_HubModal' });

const HubModal = props => {
  const {
    actions,
    children,
    handleClose,
    show = false,
    title,
  } = props;
  const classes = useStyles();

  const handleClickClose = () => {
    handleClose();
  };

  return (
    <Dialog
      open={show}
      onClose={handleClickClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title
        && (
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        )}
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <div className={classes.actions}>
          {actions}
        </div>
      </DialogActions>
    </Dialog>
  );
};

HubModal.propTypes = {
  actions: PropTypes.node,
  children: PropTypes.node,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.string,
    () => null,
  ]),
};

export default HubModal;
