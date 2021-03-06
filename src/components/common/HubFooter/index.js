import { makeStyles } from '@material-ui/styles';
import { slotState } from 'data/characterState';
import { useRecoilValue } from 'recoil';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    background: 'rgba(0, 0, 0, .5)',
    borderRadius: '0 0 5px 5px',
    padding: '8px 16px',
    fontSize: 14,
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_HubFooter' });

const HubFooter = () => {
  // const slots = useRecoilValue(slotState);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      16/22 slots filled
    </div>
  );
};

export default HubFooter;
