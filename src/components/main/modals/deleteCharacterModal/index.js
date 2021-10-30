import { PropTypes } from 'prop-types';
import HubModal from 'components/common/hubModal';
import DeleteCharacterForm from 'components/main/forms/deleteCharacter';

const DeleteCharacterModal = props => {
  const { open, handleCloseCallback } = props;

  return (
    <HubModal
      handleClose={handleCloseCallback}
      show={open}
      title="new character"
    >
      <DeleteCharacterForm handleClickClose={handleCloseCallback} />
    </HubModal>
  );
};

DeleteCharacterModal.propTypes = {
  handleCloseCallback: PropTypes.func,
  open: PropTypes.bool,
};

export default DeleteCharacterModal;
