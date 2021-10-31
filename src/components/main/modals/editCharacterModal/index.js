import { PropTypes } from 'prop-types';
import HubModal from 'components/common/hubModal';
import EditCharacterForm from 'components/main/forms/editCharacter';

const EditCharacterModal = props => {
  const { open, handleCloseCallback } = props;

  return (
    <HubModal
      handleClose={handleCloseCallback}
      show={open}
      title="edit character"
    >
      <EditCharacterForm handleClickClose={handleCloseCallback} />
    </HubModal>
  );
};

EditCharacterModal.propTypes = {
  handleCloseCallback: PropTypes.func,
  open: PropTypes.bool,
};

export default EditCharacterModal;
