import { PropTypes } from 'prop-types';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const HubModal = props => {
  const {
    children,
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
      fullWidth
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
    </Dialog>
  );
};

HubModal.propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.string,
    () => null,
  ]),
};

export default HubModal;
