import { PropTypes } from 'prop-types';
import HubModal from 'components/common/hubModal';
import { character } from 'data/constants';
import NewCharacterForm from 'components/main/forms/newCharacter';
import useCharacterManager from 'hooks/useCharacterManager';

const NewCharacterModal = props => {
  const { open, handleCloseCallback } = props;
  const { create } = useCharacterManager();

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

  return (
    <HubModal
      handleClose={handleClickClose}
      show={open}
      title="new character"
    >
      <NewCharacterForm handleConfirm={handleConfirm} handleCancel={handleCancel} />
    </HubModal>
  );
};

NewCharacterModal.propTypes = {
  handleCloseCallback: PropTypes.func,
  open: PropTypes.bool,
};

export default NewCharacterModal;
