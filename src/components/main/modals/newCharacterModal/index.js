import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
// } from '@material-ui/core';
import HubModal from 'components/common/hubModal';
import HubButton from 'components/common/hubButton';

const NewCharacterModal = props => {
  const { open, handleCloseCallback } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const handleClickClose = () => {
    setShow(false);
    handleCloseCallback();
  };

  return (
    <HubModal
      dialog="Please enter the name of your new character."
      show={show}
      title="new character"
      handleClose={handleClickClose}
    >
      <HubButton
        label="confirm"
        onClick={() => {
          handleClickClose();
        }}
      />
      <HubButton
        label="cancel"
        type="warning"
        onClick={() => {
          handleClickClose();
        }}
      />
    </HubModal>
  );
};

NewCharacterModal.propTypes = {
  handleCloseCallback: PropTypes.func,
  open: PropTypes.bool,
};

export default NewCharacterModal;
