import { PropTypes } from 'prop-types';
import HubChip from 'components/common/hubChip';
import HubIconButton from 'components/common/hubIconButton';
import DetailField from 'components/common/detailField/';
import DetailHeader from 'components/common/detailHeader/';
import { makeStyles } from '@material-ui/styles';
import { CHAR_DETAIL_KEYS, modifierColors } from 'data/constants';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { characterDetailState, characterState } from 'data/characterState';

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
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}, { name: 'Mui_Styles_CharacterFinal' });

const electives = [
  { name: 'brainpower', type: 'spell', readOnly: true },
  { name: 'innate regeneration', type: 'ability', readOnly: true },
  { name: 'sacred flame', type: 'potion', readOnly: true },
  { name: 'buff', type: 'potion', readOnly: true },
  { name: 'buff2', type: 'potion', readOnly: true },
];

const resistances = [
  { name: 'flame', type: 'resistance', readOnly: true },
];

const immunities = [
  { name: 'poison', type: 'immunity', readOnly: true },
];

const susceptibilities = [
  { name: 'stab', type: 'susceptibility', readOnly: true },
  { name: 'bludgeon', type: 'susceptibility', readOnly: true },
];

const CharacterFinal = () => {
  const setPage = useSetRecoilState(characterDetailState);
  const character = useRecoilValue(characterState);
  const { name, version } = character;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section>
        <DetailHeader title="characer overview">
          <HubIconButton onClick={() => setPage(CHAR_DETAIL_KEYS.STATS)} iconPath="/totem-head.png" />
        </DetailHeader>
      </section>
      <section>
        <DetailField justifyContent="flex-start" maxWidth="unset" label="name" value={name} padding="0 8px" />
        <DetailField justifyContent="flex-start" maxWidth="unset" label="version" value={version} padding="0 8px" />
      </section>
      <section>
        <div className={classes.container}>
          <DetailField label="HP" value={750} padding="0 8px" />
          <DetailField label="MV" value={423} padding="0 8px" />
          <DetailField label="MA" value={857} padding="0 8px" />
        </div>
        <div className={classes.container}>
          <DetailField label="AC" value={-127} padding="0 8px" />
          <DetailField label="align" value="GNE" padding="0 8px" />
          <DetailField label="rent" value={53273} padding="0 8px" />
        </div>
      </section>
      <section>
        <DetailHeader title="primary stats" />
      </section>
      <section>
        <div className={classes.container}>
          <DetailField label="str" value={19} padding="0 8px" />
          <DetailField label="str cap" value={0} padding="0 8px" />
        </div>
        <div className={classes.container}>
          <DetailField label="min" value={113} padding="0 8px" />
          <DetailField label="min cap" value={13} padding="0 8px" />
        </div>
        <div className={classes.container}>
          <DetailField label="dex" value={60} padding="0 8px" />
          <DetailField label="dex cap" value={0} padding="0 8px" />
        </div>
        <div className={classes.container}>
          <DetailField label="con" value={72} padding="0 8px" />
          <DetailField label="con cap" value={0} padding="0 8px" />
        </div>
        <div className={classes.container}>
          <DetailField label="per" value={40} padding="0 8px" />
          <DetailField label="per cap" value={0} padding="0 8px" />
        </div>
        <div className={classes.container}>
          <DetailField label="spi" value={43} padding="0 8px" />
          <DetailField label="spi cap" value={0} padding="0 8px" />
        </div>
      </section>
      <section>
        <DetailHeader title="regen" />
      </section>
      <section>
        <div className={classes.container}>
          <DetailField label="HPR" value={4} padding="0 8px" />
          <DetailField label="MVR" value={3} padding="0 8px" />
          <DetailField label="MAR" value={30} padding="0 8px" />
        </div>
      </section>
      <section>
        <header>
          <div className={classes.container}>
            <DetailHeader title="spell mods" flex />
            <DetailHeader title="melee mods" flex />
          </div>
        </header>
      </section>
      <section>
        <div className={classes.container}>
          <DetailField label="spell dmg" value={85} padding="0 8px" />
          <DetailField label="damroll" value={-31} padding="0 8px" />
        </div>
        <div className={classes.container}>
          <DetailField label="spell crit" value={73} padding="0 8px" />
          <DetailField label="hitroll" value={-21} padding="0 8px" />
        </div>
        <div className={classes.container}>
          <DetailField label="spell redux" value={51} padding="0 8px" />
          <DetailField label="mitigation" value={2} padding="0 8px" />
        </div>
        <div className={classes.container}>
          <DetailField label="concen" value={30} padding="0 8px" />
          <DetailField label="parry" value={0} padding="0 8px" />
        </div>
      </section>
      <section>
        <DetailHeader title="range mods" />
      </section>
      <section>
        <div className={classes.container}>
          <DetailField label="accuracy" value={0} padding="0 8px" />
        </div>
      </section>
      <section>
        <DetailHeader title="affects mods" />
      </section>
      <section>
        <div className={classes.chips}>
          {electives.map((elective, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={modifierColors[elective?.type]?.bgColor}
                color={modifierColors[elective?.type]?.color}
                label={elective.name}
                onDelete={() => {}}
                readOnly={elective.readOnly}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <DetailHeader title="resistances" />
      </section>
      <section>
        <div className={classes.chips}>
          {resistances.map((resistance, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={modifierColors[resistance?.type]?.bgColor}
                color={modifierColors[resistance?.type]?.color}
                label={resistance.name}
                onDelete={() => {}}
                readOnly={resistance.readOnly}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <DetailHeader title="immunities" />
      </section>
      <section>
        <div className={classes.chips}>
          {immunities.map((immunity, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={modifierColors[immunity?.type]?.bgColor}
                color={modifierColors[immunity?.type]?.color}
                label={immunity.name}
                onDelete={() => {}}
                readOnly={immunity.readOnly}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <DetailHeader title="susceptibilities" />
      </section>
      <section>
        <div className={classes.chips}>
          {susceptibilities.map((susceptibility, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={modifierColors[susceptibility?.type]?.bgColor}
                color={modifierColors[susceptibility?.type]?.color}
                label={susceptibility.name}
                onDelete={() => {}}
                readOnly={susceptibility.readOnly}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CharacterFinal;
