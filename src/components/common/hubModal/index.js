import { PropTypes } from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const HubModal = props => {
  const {
    dialog,
    handleClose,
    show = false,
    title,
  } = props;

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
        {dialog}
      </DialogContent>
      <DialogActions>
        {props.children}
      </DialogActions>
    </Dialog>
  );
};

HubModal.propTypes = {
  children: PropTypes.node,
  dialog: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.string,
    () => null,
  ]),
};

export default HubModal;
