import { makeStyles } from '@material-ui/styles';
import DetailHeader from 'components/common/detailHeader';
import DetailSelect from 'components/common/detailSelect';
import { useRecoilValue } from 'recoil';
import { questModiferOptionsState, questModifiersState } from 'data/characterState';
import useCharacterManager from 'hooks/useCharacterManager';
import { QUESTS_TYPES } from 'data/constants';

const useStyles = makeStyles({
  root: {
    marginBottom: '1em',
  },
  container: {
    display: 'grid',
    gridRowGap: '1em',
  },
}, { name: 'Mui_Styles_QuestModifiers' });

const QuestModifiers = () => {
  const options = useRecoilValue(questModiferOptionsState);
  const quests = useRecoilValue(questModifiersState);
  const { updateQuest } = useCharacterManager();
  const classes = useStyles();

  const handleFiveThreeChange = updateQuest(QUESTS_TYPES.FIVE_THREE);
  const handleTenStatChange = updateQuest(QUESTS_TYPES.TEN);

  return (
    <main className={classes.root}>
      <DetailHeader title="quest modifiers" />
      <section className={classes.container}>
        <DetailSelect
          defaultText="Select a stat"
          label="+10 stat"
          onChange={handleTenStatChange}
          options={options.ten}
          value={quests.ten}
        />
        <DetailSelect
          defaultText="Select a quest"
          label="+10/3 stats"
          onChange={handleFiveThreeChange}
          options={options.fiveThree}
          value={quests.fiveThree}
        />
      </section>
    </main>
  );
};

export default QuestModifiers;
