import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '0 2em',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px 5px 0 0',
    maxWidth: '100px',
    cursor: 'default',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontSize: '12px',
    fontWeight: props => props.isActive ? 700 : 200,
    color: props => props.isActive ? '#fff' : '#aaa',
    fontStyle: props => props.isActive ? 'unset' : 'italic',
    background: props => props.isActive ? '#222' : '#000',
  },
}, { name: 'Mui_Styles_TabsTab' });

const TabsTab = props => {
  const { onTabClick, tab } = props;
  const classes = useStyles(props);

  return (
    <div role="button" tabIndex={0} className={classes.root} onClick={() => onTabClick(tab)}>
      {tab.name}
    </div>
  );
};

export default TabsTab;
