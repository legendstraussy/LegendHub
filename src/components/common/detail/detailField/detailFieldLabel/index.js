import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    minWidth: '30%',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_DetailFieldLabel' });

const DetailFieldLabel = props => {
  const { label } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {label}
      :
    </div>
  );
};

DetailFieldLabel.propTypes = {
  label: PropTypes.string,
};

export default DetailFieldLabel;
