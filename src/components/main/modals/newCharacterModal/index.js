import { PropTypes } from 'prop-types';
import HubModal from 'components/common/hubModal';
import NewCharacterForm from 'components/main/forms/newCharacter';

const NewCharacterModal = props => {
  const { open, handleCloseCallback } = props;

  return (
    <HubModal
      handleClose={handleCloseCallback}
      show={open}
      title="new character"
    >
      <NewCharacterForm handleClickClose={handleCloseCallback} />
    </HubModal>
  );
};

NewCharacterModal.propTypes = {
  handleCloseCallback: PropTypes.func,
  open: PropTypes.bool,
};

export default NewCharacterModal;
