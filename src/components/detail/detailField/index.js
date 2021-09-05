import DetailFieldLabel from '../detailFieldLabel';
import DetailFieldValue from '../detailFieldValue';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'space-between',
    maxWidth: '50%',
    margin: '0 8px',
  },
}, { name: 'Mui_Styles_DetailField' });

const DetailField = props => {
  const { label, value } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DetailFieldLabel label={label} />
      <DetailFieldValue value={value} />
    </div>
  )
}

export default DetailField;
