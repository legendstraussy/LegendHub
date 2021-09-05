import HubIconButton from 'components/common/hubIconButton';
import StatsGrid from 'components/statsGrid';
import { makeStyles } from '@material-ui/styles';
import finalStatsIcon from '../../../public/scroll-quill.png';
import printStatsIcon from '../../../public/tied-scroll.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& section': {
      margin: '0 0 1em 0',
    },
    '& header': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
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
}, { name: 'Mui_Styles_CharStats' });

const CharStats = props => {
  const { onFinalClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section>
        <header>
          <div className={classes.label}>stats</div>
          <div className={classes.toolbar}>
            <div className={classes.tool}>
              <HubIconButton icon={printStatsIcon} />
            </div>
            <div className={classes.tool}>
              <HubIconButton onClick={onFinalClick} icon={finalStatsIcon} />
            </div>
          </div>
        </header>
      </section>
      <section>
        <StatsGrid />
      </section>
    </div>
  );
};

export default CharStats;
