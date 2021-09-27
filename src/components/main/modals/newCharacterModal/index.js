import { useEffect, useState, useRef } from 'react';
import { PropTypes } from 'prop-types';
import HubModal from 'components/common/hubModal';
import HubButton from 'components/common/hubButton';
import HubInput from 'components/common/hubInput';
import { DialogActions, DialogContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({
  root: {
    '& header': {
      paddingBottom: 15,
    },
  },
  actions: {
    width: 205,
    display: 'flex',
    justifyContent: 'space-between',
  },
}), { name: 'Mui_Styles_NewCharacterModal' });

const NewCharacterModal = props => {
  const { open, handleCloseCallback } = props;
  const nameRef = useRef();
  const [show, setShow] = useState(false);
  // const [name, setName] = useState('');
  const classes = useStyles();

  useEffect(() => {
    if (show && nameRef) {
      console.log('bingo', nameRef);
      // nameRef.current.focus();
    }
  }, [show]);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const handleClickClose = () => {
    setShow(false);
    handleCloseCallback();
  };

  const handleConfirm = () => {
    handleClickClose();
  };

  const handleCancel = () => {
    handleClickClose();
  };

  return (
    <HubModal
      handleClose={handleClickClose}
      show={show}
      title="new character"
    >
      <DialogContent>
        <form className={classes.root}>
          <header>Please enter the name of your new character.</header>
          <HubInput ref={nameRef} />
        </form>
      </DialogContent>
      <DialogActions>
        <div className={classes.actions}>
          <HubButton
            label="confirm"
            onClick={handleConfirm}
          />
          <HubButton
            label="cancel"
            type="warning"
            onClick={handleCancel}
          />
        </div>
      </DialogActions>
    </HubModal>
  );
};

NewCharacterModal.propTypes = {
  handleCloseCallback: PropTypes.func,
  open: PropTypes.bool,
};

export default NewCharacterModal;
