import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    justifyContent: props => props.justifyContent ?? 'center',
  },
}, { name: 'Mui_Styles_hubTableHeader' });

const HubTableHeader = props => {
  const { header } = props;
  const classes = useStyles(props);

  return (
    <div
      className={classes.root}
      data-value={header.id}
    >
      {header.label}
    </div>
  );
};

HubTableHeader.propTypes = {
  header: PropTypes.shape({
    align: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default HubTableHeader;
