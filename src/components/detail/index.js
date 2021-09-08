import { PropTypes } from 'prop-types';
import HubIconButton from 'components/common/hubIconButton';
import { makeStyles } from '@material-ui/styles';
import totemIcon from '../../../public/totem-head.png';

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
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
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
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  field: {
    display: 'flex',
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'space-between',
    maxWidth: '50%',
    margin: '0 8px',
  },
  fieldLabel: {
    minWidth: '25%',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  fieldValue: {
    fontSize: '14px',
    fontWeight: '100',
  },
}, { name: 'Mui_Styles_CharacterFinalOverview' });

const Overview = props => {
  const { children, onStatsClick, title } = props;
  const classes = useStyles();

  return (
    <div>
      <section>
        <header>
          <div className={classes.label}>{title}</div>
          <div className={classes.toolbar}>
            <div className={classes.tool}>
              <HubIconButton onClick={onStatsClick} icon={totemIcon} />
            </div>
          </div>
        </header>
      </section>
      <section>
        {children}
      </section>
    </div>
  );
};

Overview.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onStatsClick: PropTypes.func,
  title: PropTypes.string,
};

export default Overview;
