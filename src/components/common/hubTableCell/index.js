import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: 'inherit',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
}, { name: 'Mui_Styles_huTabbleCell' });

const HubTableCell = props => {
  const { label, text = '' } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div data-value={label}>
        {text}
      </div>
    </div>
  );
};

HubTableCell.propTypes = {
  label: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default HubTableCell;
