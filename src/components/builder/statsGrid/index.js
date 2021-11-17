import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import StatsGridRow from 'components/builder/statsGridRow';
import StatsGridHeaders from 'components/builder/statsGridHeaders';
import DetailHeader from 'components/common/detailHeader';
import DetailBody from 'components/common/detailBody';
import HubIconButton from 'components/common/hubIconButton';
import { characterDetailState, statsState } from 'data/characterState';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CHAR_DETAIL_KEYS, STATS_SCHEMA } from 'data/constants';

const useStyles = makeStyles({
  root: {
    marginBottom: '1em',
  },
}, { name: 'Mui_Styles_StatsGrid' });

const StatsGrid = () => {
  const { str, min, dex, con, per, spi } = useRecoilValue(statsState);
  const setPage = useSetRecoilState(characterDetailState);
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <DetailHeader title="stats">
        <HubIconButton iconPath="/scroll-quill.png" />
        <HubIconButton onClick={() => setPage(CHAR_DETAIL_KEYS.FINAL)} iconPath="/tied-scroll.png" />
      </DetailHeader>
      <DetailBody>
        <StatsGridHeaders rawLabel="raw" uneqLabel="uneq" swapLabel="swap" finalLabel="final" />
        <StatsGridRow name="str" stat={str} color={STATS_SCHEMA.STR.color} />
        <StatsGridRow name="min" stat={min} color={STATS_SCHEMA.MIN.color} />
        <StatsGridRow name="dex" stat={dex} color={STATS_SCHEMA.DEX.color} />
        <StatsGridRow name="con" stat={con} color={STATS_SCHEMA.CON.color} />
        <StatsGridRow name="per" stat={per} color={STATS_SCHEMA.PER.color} />
        <StatsGridRow name="spi" stat={spi} color={STATS_SCHEMA.SPI.color} />
      </DetailBody>
    </main>
  );
};

export default StatsGrid;
