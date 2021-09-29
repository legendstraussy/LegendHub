import { PropTypes } from 'prop-types';
import HubModal from 'components/common/hubModal';
import HubButton from 'components/common/hubButton';
import { character } from 'data/constants';
import NewCharacterForm from 'components/main/forms/newCharacter';
import useCharacterManager from 'hooks/useCharacterManager';

const NewCharacterModal = props => {
  const { open, handleCloseCallback } = props;
  const { create } = useCharacterManager();

  console.log('render test', open);

  const handleClickClose = () => {
    handleCloseCallback();
  };

  const handleConfirm = (event, name) => {
    event.preventDefault();

    if (name) {
      const char = {
        ...character,
        name,
      };
      create(char);
    }
    handleClickClose();
  };

  const handleCancel = () => {
    handleClickClose();
  };

  const actions = (
    <>
      <HubButton
        label="confirm"
        onClick={handleConfirm}
      />
      <HubButton
        label="cancel"
        type="warning"
        onClick={handleCancel}
      />
    </>
  );

  return (
    <HubModal
      actions={actions}
      handleClose={handleClickClose}
      show={open}
      title="new character"
    >
      <NewCharacterForm onSubmit={handleConfirm} />
    </HubModal>
  );
};

NewCharacterModal.propTypes = {
  handleCloseCallback: PropTypes.func,
  open: PropTypes.bool,
};

export default NewCharacterModal;
