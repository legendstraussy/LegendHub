import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1em',
  },
  label: {
    color: '#FFD874',
    fontSize: props => props.fontSize ?? '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  toolbar: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: 15,
  },
}, { name: 'Mui_Styles_DetailHeader' });

const DetailHeader = props => {
  const { children, isRequired, title } = props;
  const classes = useStyles(props);

  return (
    <header className={classes.root}>
      <div className={classes.label}>
        {title}
        {isRequired ? ' *' : null}
      </div>
      {children && (
        <div className={classes.toolbar}>
          {children}
        </div>
      )}
    </header>
  );
};

DetailHeader.propTypes = {
  children: PropTypes.node,
  isRequired: PropTypes.bool,
  title: PropTypes.string,
};

export default DetailHeader;
