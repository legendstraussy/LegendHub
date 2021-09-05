import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    minWidth: '25%',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_DetailFieldLabel' });

const DetailFieldLabel = props => {
  const { label } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>{label}:</div>
  )
}

export default DetailFieldLabel;
