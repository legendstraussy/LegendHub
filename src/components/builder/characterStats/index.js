import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import QuestModifiers from 'components/builder/questModifiers';
import ElectiveModifiers from 'components/builder/electiveModifiers';
import HubIconButton from 'components/common/hubIconButton';
import StatsGrid from 'components/builder/statsGrid';
import DetailHeader from 'components/common/detail/detailHeader';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    marginBottom: '1em',
    '& header': {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
}, { name: 'Mui_Styles_CharacterStats' });

const CharacterStats = props => {
  const { onFinalClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.section}>
        <DetailHeader title="stats">
          <HubIconButton iconPath="/scroll-quill.png" />
          <HubIconButton onClick={onFinalClick} iconPath="/tied-scroll.png" />
        </DetailHeader>
      </section>
      <section className={classes.section}>
        <StatsGrid />
      </section>
      <section className={classes.section}>
        <QuestModifiers />
      </section>
      <section className={classes.section}>
        <ElectiveModifiers />
      </section>
    </div>
  );
};

CharacterStats.propTypes = {
  onFinalClick: PropTypes.func,
};

export default CharacterStats;
