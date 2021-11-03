import { useState } from 'react';
import HubButton from 'components/common/hubButton';
import HubVersion from 'components/main/hubVersion';
import NewCharacterModal from 'components/main/modals/newCharacterModal';
import DeleteCharacterModal from 'components/main/modals/deleteCharacterModal';
import EditCharacterModal from 'components/main/modals/editCharacterModal';
import { makeStyles } from '@material-ui/styles';
import { useRecoilValue } from 'recoil';
import { characterState } from 'data/characterState';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: -5,
    display: 'flex',
    padding: 0,
    margin: '30px 13px 0px 125px',
  },
  buttonLayout: {
    margin: '0 .4em',
  },
}, { name: 'Mui_Styles_Toolbar' });

const Toolbar = () => {
  const [modal, setModal] = useState(null);
  const character = useRecoilValue(characterState);
  const classes = useStyles();

<<<<<<< HEAD
  console.log('wooooo', modal);

=======
>>>>>>> 7c9885a2546f3028b29b00d6c2954d49f91479b1
  const handleModalCheck = key => modal === key;

  const handleClearModal = () => {
    setModal(null);
  };

  return (
    <div className={classes.root}>
      <div className={classes.buttonLayout}>
<<<<<<< HEAD
        <HubButton label="New" type="primary" onClick={() => setModal('new')} />
        <NewCharacterModal open={handleModalCheck('new')} handleCloseCallback={handleClearModal} />
=======
        <HubButton label="new" type="primary" onClick={() => setModal('new')} />
        <NewCharacterModal open={handleModalCheck('new')} handleCloseCallback={handleClearModal} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton disabled={!character} label="edit" type="default" onClick={() => setModal('edit')} />
        <EditCharacterModal open={handleModalCheck('edit')} handleCloseCallback={handleClearModal} />
>>>>>>> 7c9885a2546f3028b29b00d6c2954d49f91479b1
      </div>
      <div className={classes.buttonLayout}>
        <HubButton disabled label="undo" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton disabled label="import" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton disabled label="export" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton disabled label="clear" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton disabled={!character} label="delete" type="warning" onClick={() => setModal('delete')} />
        <DeleteCharacterModal open={handleModalCheck('delete')} handleCloseCallback={handleClearModal} />
      </div>
      <HubVersion />
    </div>
  );
};

export default Toolbar;
