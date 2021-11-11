import { useCallback, useState } from 'react';
import HubButton from 'components/common/hubButton';
import HubVersion from 'components/main/hubVersion';
import HubModal from 'components/common/hubModal';
import { makeStyles } from '@material-ui/styles';
import { useRecoilValue } from 'recoil';
import { characterState } from 'data/characterState';
import ClearCharacterForm from '../forms/clearCharacter';
import NewCharacterForm from '../forms/newCharacter';
import EditCharacterForm from '../forms/editCharacter';
import DeleteCharacterForm from '../forms/deleteCharacter';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: -5,
    display: 'flex',
    padding: 0,
    margin: '30px 13px 0px 125px',
  },
  buttons: {
    '& button': {
      margin: '0 .4em',
    },
  },
}, { name: 'Mui_Styles_Toolbar' });

const Toolbar = () => {
  const [modal, setModal] = useState(null);
  const [open, setOpen] = useState(false);
  const character = useRecoilValue(characterState);
  const classes = useStyles();

  const handleModalClick = useCallback(key => {
    setModal(key);
    setOpen(true);
  }, [setModal, setOpen]);

  const handleClearModal = () => {
    setOpen(false);
  };

  const [modals] = useState({
    new: { title: 'new character', component: <NewCharacterForm handleClickClose={handleClearModal} /> },
    edit: { title: 'edit character', component: <EditCharacterForm handleClickClose={handleClearModal} /> },
    clear: { title: 'clear equipment', component: <ClearCharacterForm handleClickClose={handleClearModal} /> },
    delete: { title: 'delete character', component: <DeleteCharacterForm handleClickClose={handleClearModal} /> },
  });

  return (
    <div className={classes.root}>
      <section className={classes.buttons}>
        <HubButton label="new" type="primary" onClick={() => handleModalClick('new')} />
        <HubButton disabled={!character} label="edit" type="default" onClick={() => handleModalClick('edit')} />
        <HubButton disabled label="undo" type="default" onClick={() => handleModalClick('undo')} />
        <HubButton disabled label="import" type="default" onClick={() => handleModalClick('import')} />
        <HubButton disabled label="export" type="default" onClick={() => handleModalClick('export')} />
        <HubButton disabled={!character} label="clear" type="default" onClick={() => handleModalClick('clear')} />
        <HubButton disabled={!character} label="delete" type="warning" onClick={() => handleModalClick('delete')} />
      </section>
      <HubVersion />
      <HubModal
        handleClose={handleClearModal}
        maxWidth="325px"
        show={open}
        title={modals[modal]?.title}
      >
        {modals[modal]?.component}
      </HubModal>
    </div>
  );
};

export default Toolbar;
