import { makeStyles } from '@material-ui/styles';
import DetailHeader from 'components/common/detailHeader';
import DetailBody from 'components/common/detailBody';
import DetailCheck from 'components/common/detailCheck';
import DetailSelect from 'components/common/detailSelect';
import { useRecoilValue } from 'recoil';
import { questModiferOptionsState, questModifiersState } from 'data/characterState';
import useCharacterManager from 'hooks/useCharacterManager';

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
  field: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fieldLabel: {
    fontSize: '14px',
    fontWeight: '100',
  },
}, { name: 'Mui_Styles_QuestModifiers' });

const QuestModifiers = () => {
  const options = useRecoilValue(questModiferOptionsState);
  const quests = useRecoilValue(questModifiersState);
  const { modifyTen, modifyFiveThree, modifyThreeAll } = useCharacterManager();
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <DetailHeader title="quest modifiers" />
      <DetailSelect
        defaultText="Select a stat"
        label="+10 stat"
        onChange={modifyTen}
        options={options.ten}
        value={quests.ten}
      />
      <DetailSelect
        defaultText="Select a quest"
        label="+10/3 stats"
        onChange={modifyFiveThree}
        options={options.fiveThree}
        value={quests.fiveThree}
      />
      <DetailCheck
        label="+3 stats"
        onChange={modifyThreeAll}
        value={quests.threeAll}
      />
    </main>
  );
};

export default QuestModifiers;
