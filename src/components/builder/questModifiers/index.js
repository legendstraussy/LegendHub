import { useState } from 'react';
import HubSelect from 'components/common/hubSelect';
import HubCheckbox from 'components/common/hubCheckbox';
import { makeStyles } from '@material-ui/styles';
import { stats, fiveThreeQuests } from 'data/constants';
import { getKeyArrayFromObject } from 'utils/utilFns';

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
}, { name: 'Mui_Styles_CharQuestModifiers' });

const CharQuestModifiers = () => {
  const [tenModifer, setTenModifier] = useState(stats.str.name);
  const [fiveThreeModifier, setFiveThreeModifier] = useState(fiveThreeQuests[2].name);
  const [threeAllModifier, setThreeAllModifier] = useState(true);
  const classes = useStyles();
  const statOptions = getKeyArrayFromObject(stats)
    .map(stat => ({ name: stat?.name, value: stat?.name }));
  const fiveThreeOptions = fiveThreeQuests
    .map(quest => ({ name: quest.name, value: quest.name }));

  return (
    <div className={classes.root}>
      <section>
        <header>
          <div className={classes.label}>quest modifiers</div>
        </header>
      </section>
      <section>
        <div className={classes.field}>
          <div className={classes.fieldLabel}>+10 mod.</div>
          <div className={classes.fieldValue}>
            <HubSelect
              background="#222"
              border="1px solid rgba(105, 85, 85, .75)"
              borderRadius="5px"
              defaultText="Select a stat"
              onChange={setTenModifier}
              options={statOptions}
              value={tenModifer}
            />
          </div>
        </div>
      </section>
      <section>
        <div className={classes.field}>
          <div className={classes.fieldLabel}>+5/3 mod.</div>
          <div className={classes.fieldValue}>
            <HubSelect
              background="#222"
              border="1px solid rgba(105, 85, 85, .75)"
              borderRadius="5px"
              defaultText="Select stats"
              onChange={setFiveThreeModifier}
              options={fiveThreeOptions}
              value={fiveThreeModifier}
            />
          </div>
        </div>
      </section>
      <section>
        <div className={classes.field}>
          <div className={classes.fieldLabel}>+3/all mod.</div>
          <div className={classes.fieldValue}>
            <HubCheckbox
              onChange={setThreeAllModifier}
              value={threeAllModifier}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharQuestModifiers;
