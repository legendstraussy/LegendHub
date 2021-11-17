import HubSelect from 'components/common/hubSelect';
import { makeStyles } from '@material-ui/styles';
import DetailHeader from 'components/common/detailHeader';
import DetailBody from 'components/common/detailBody';
import DetailField from 'components/common/detailField';
import QuestSelect from 'components/builder/questSelect';
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
  const { modifyTen, modifyFiveThree } = useCharacterManager();
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <DetailHeader title="quest modifiers" />
      <DetailBody>
        <QuestSelect
          label="+10 stat"
          onChange={modifyTen}
          options={options.ten}
          value={quests.ten}
        />
        <QuestSelect
          label="+10/3 stats"
          onChange={modifyFiveThree}
          options={options.fiveThree}
          value={quests.fiveThree}
        />
      </DetailBody>
    </main>
  );
};

export default QuestModifiers;
