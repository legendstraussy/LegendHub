import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import HubIconButton from 'components/common/hubIconButton';
import StatsGrid from 'components/builder/statsGrid';
import DetailHeader from 'components/common/detail/detailHeader';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& section': {
      marginBottom: '1em',
    },
    '& header': {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
}, { name: 'Mui_Styles_CharacterStats' });

const CharacterStats = props => {
  const { onFinalClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section>
        <DetailHeader title="test">
          <HubIconButton iconPath="/scroll-quill.png" />
          <HubIconButton onClick={onFinalClick} iconPath="/tied-scroll.png" />
        </DetailHeader>
      </section>
      <StatsGrid />
    </div>
  );
};

CharacterStats.propTypes = {
  onFinalClick: PropTypes.func,
};

export default CharacterStats;
