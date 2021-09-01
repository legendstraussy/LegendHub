import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    margin: '0 .5em',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px 5px 0 0',
    minWidth: '100px',
    maxWidth: '1750px',
    cursor: 'default',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontSize: '12px',
    fontWeight: 700,
    color: props => props.isActive ? '#fff' : 'rgba(106, 100, 100, 0.75)',
    fontStyle: props => props.isActive ? 'unset' : 'italic',
    background: props => props.isActive ? 'rgba(0, 0, 0, .7)' : 'rgba(26, 20, 0, .75)',
    borderBottom: props => props.isActive ? '2px solid #2E94FA' : '2px solid rgba(106, 100, 100, 0.75)',
    '& img:first-child': {
      display: 'none !important',
    },
  },
  icon: {
    position: 'relative !important',
    width: '32px !important',
    height: '32px !important',
    minWidth: 'unset !important',
    maxWidth: 'unset !important',
    minHeight: 'unset !important',
    maxHeight: 'unset !important',
  },
  tabLabel: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
}, { name: 'Mui_Styles_TabsTab' });

const TabsTab = props => {
  const { onTabClick, tab } = props;
  const classes = useStyles(props);

  return (
    <div role="button" tabIndex={0} className={classes.root} onClick={() => onTabClick(tab)}>
      <Image src={tab.icon} alt="" className={classes.icon} />
      <div className={classes.tabLabel}>
        {tab.name}
      </div>
    </div>
  );
};

export default TabsTab;
