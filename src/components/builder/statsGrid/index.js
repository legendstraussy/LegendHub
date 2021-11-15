import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import StatsGridRow from 'components/builder/statsGridRow';
import StatsGridHeaders from 'components/builder/statsGridHeaders';
import DetailHeader from 'components/common/detailHeader';
import DetailBody from 'components/common/detailBody';
import HubIconButton from 'components/common/hubIconButton';
import { characterDetailState, mainStatsState } from 'data/characterState';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CHAR_DETAIL_KEYS } from 'data/constants';

const useStyles = makeStyles({
  root: {
    marginBottom: '1em',
  },
}, { name: 'Mui_Styles_StatsGrid' });

const StatsGrid = () => {
  const { str, min, dex, con, per, spi } = useRecoilValue(mainStatsState);
  const [headers] = useState(['raw', 'uneq', 'swap', 'final']);
  const setPage = useSetRecoilState(characterDetailState);
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <DetailHeader title="stats">
        <HubIconButton iconPath="/scroll-quill.png" />
        <HubIconButton onClick={() => setPage(CHAR_DETAIL_KEYS.FINAL)} iconPath="/tied-scroll.png" />
      </DetailHeader>
      <DetailBody>
        <StatsGridHeaders headers={headers} offset />
        <StatsGridRow name="str" stat={str} />
        <StatsGridRow name="min" stat={min} />
        <StatsGridRow name="dex" stat={dex} />
        <StatsGridRow name="con" stat={con} />
        <StatsGridRow name="per" stat={per} />
        <StatsGridRow name="spi" stat={spi} />
      </DetailBody>
    </main>
  );
};

export default StatsGrid;
