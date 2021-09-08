import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
  },
  label: {
    color: '#FFD874',
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  toolbar: {
    display: 'flex',
  },
  tool: {
    margin: '0 .5em',
  },
}, { name: 'Mui_Styles_DetailHeader' });

const DetailHeader = props => {
  const { children, title } = props;
  const classes = useStyles(props);

  return (
    <header className={classes.root}>
      <div className={classes.label}>{title}</div>
      {children
      && (
        <div className={classes.toolbar}>
          <div className={classes.tool}>
            {children}
          </div>
        </div>
      )}
    </header>
  );
};

DetailHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
};

export default DetailHeader;
