import { useState } from 'react';
import HubButton from 'components/common/hubButton';
import HubVersion from 'components/main/hubVersion';
import NewCharacterModal from 'components/main/modals/newCharacterModal';
import DeleteCharacterModal from 'components/main/modals/deleteCharacterModal';
import { makeStyles } from '@material-ui/styles';

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
  const classes = useStyles();

  const handleModalCheck = key => modal === key;

  const handleClearModal = () => {
    setModal(null);
  };

  return (
    <div className={classes.root}>
      <div className={classes.buttonLayout}>
        <HubButton label="new" type="primary" onClick={() => setModal('new')} />
        <NewCharacterModal open={handleModalCheck('new')} handleCloseCallback={handleClearModal} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="undo" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="import" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="export" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="clear" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="delete" type="warning" onClick={() => setModal('delete')} />
        <DeleteCharacterModal open={handleModalCheck('delete')} handleCloseCallback={handleClearModal} />
      </div>
      <HubVersion />
    </div>
  );
};

export default Toolbar;
