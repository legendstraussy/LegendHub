import { useRecoilValue } from 'recoil';
import { makeStyles } from '@material-ui/styles';
import { slotsState } from 'data/characterState';
import { SLOTS_TOTAL } from 'data/constants';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    background: 'rgba(0, 0, 0, .5)',
    borderRadius: '0 0 5px 5px',
    padding: '8px 16px',
    fontSize: 14,
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_EquipmentFooter' });

const EquipmentFooter = () => {
  const slots = useRecoilValue(slotsState);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {slots}/{SLOTS_TOTAL} equipment slots filled
    </div>
  );
};

export default EquipmentFooter;
