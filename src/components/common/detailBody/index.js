import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
  },
}, { name: 'Mui_Styles_DetailBody' });

const DetailBody = props => {
  const { children } = props;
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      {children}
    </section>
  );
};

DetailBody.propTypes = {
  children: PropTypes.node,
};

export default DetailBody;
