import { useState } from 'react';
import HubButton from 'components/common/hubButton';
import HubVersion from 'components/main/hubVersion';
import NewCharacterModal from 'components/main/modals/newCharacterModal';
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
  const [modal, setModal] = useState('');
  const classes = useStyles();

  console.log('wooooo', modal);

  const handleModalCheck = key => modal === key;

  const handleClearModal = () => {
    setModal('');
  };

  return (
    <div className={classes.root}>
      <div className={classes.buttonLayout}>
        <HubButton label="New" type="primary" onClick={() => setModal('new')} />
        <NewCharacterModal open={handleModalCheck('new')} handleCloseCallback={handleClearModal} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Undo" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Import" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Export" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Clear" type="default" onClick={() => {}} />
      </div>
      <div className={classes.buttonLayout}>
        <HubButton label="Delete" type="warning" onClick={() => {}} />
      </div>
      <HubVersion />
    </div>
  );
};

export default Toolbar;
