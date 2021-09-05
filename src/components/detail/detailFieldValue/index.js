import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    fontSize: '14px',
    fontWeight: '100',
  },
}, { name: 'Mui_Styles_DetailFieldValue' });

const DetailFieldValue = props => {
  const { value } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>{value}</div>
  )
}

export default DetailFieldValue;
