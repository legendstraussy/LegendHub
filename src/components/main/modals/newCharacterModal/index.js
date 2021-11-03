import { PropTypes } from 'prop-types';
import HubModal from 'components/common/hubModal';
<<<<<<< HEAD
import { character } from 'data/constants';
import NewCharacterForm from 'components/main/forms/newCharacter';
import useCharacterManager from 'hooks/useCharacterManager';

const NewCharacterModal = props => {
  const { open, handleCloseCallback } = props;
  const { create } = useCharacterManager();

  const handleClickClose = () => {
    handleCloseCallback();
  };
=======
import NewCharacterForm from 'components/main/forms/newCharacter';

const NewCharacterModal = props => {
  const { open, handleCloseCallback } = props;
>>>>>>> 7c9885a2546f3028b29b00d6c2954d49f91479b1

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
<<<<<<< HEAD
      handleClose={handleClickClose}
      show={open}
      title="new character"
    >
      <NewCharacterForm handleConfirm={handleConfirm} handleCancel={handleCancel} />
=======
      handleClose={handleCloseCallback}
      show={open}
      title="new character"
    >
      <NewCharacterForm handleClickClose={handleCloseCallback} />
>>>>>>> 7c9885a2546f3028b29b00d6c2954d49f91479b1
    </HubModal>
  );
};

NewCharacterModal.propTypes = {
  handleCloseCallback: PropTypes.func,
  open: PropTypes.bool,
};

export default NewCharacterModal;
