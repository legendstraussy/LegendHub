import { PropTypes } from 'prop-types';
import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative !important',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 .75em 0 .25em',
    margin: '0 .5em',
    borderRadius: '5px 5px 0 0',
    maxWidth: 'fit-content',
    cursor: 'default',
    textTransform: 'uppercase',
    fontFamily: 'Titillium Web',
    fontSize: '12px',
    fontWeight: 700,
    color: props => props.isActive ? '#fff' : 'rgba(106, 100, 100, 0.75)',
    background: props => props.isActive ? 'rgba(0, 0, 0, .7)' : 'rgba(24, 20, 27, 0.75)',
    borderBottom: props => props.isActive ? '2px solid #2E94FA' : '2px solid rgba(27, 13, 34, 0.5)',
    filter: props => props.isActive ? 'unset' : 'grayscale(90%)',
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
      <Image src={tab.iconPath} alt="" width={32} height={32} layout="fixed" />
      <div className={classes.tabLabel}>
        {tab.name}
      </div>
    </div>
  );
};

TabsTab.propTypes = {
  onTabClick: PropTypes.func,
  tab: PropTypes.shape({
    iconPath: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default TabsTab;
