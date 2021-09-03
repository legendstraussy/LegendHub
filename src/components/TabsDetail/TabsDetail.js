import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    background: 'rgba(0, 0, 0, .7)',
    overflow: 'hidden',
  },
}, { name: 'Mui_Styles_TabsDetail' });

const TabsDetail = props => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default TabsDetail;
