import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import StatsGridRow from 'components/builder/statsGridRow';
import StatsGridHeaders from 'components/builder/statsGridHeaders';
import { mainStatsState } from 'data/characterState';
import { useRecoilValue } from 'recoil';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridRowGap: '.5em',
  },
}, { name: 'Mui_Styles_StatsGrid' });

const StatsGrid = () => {
  const { str, min, dex, con, per, spi } = useRecoilValue(mainStatsState);
  const [headers] = useState(['raw', 'uneq', 'swap', 'final']);
  const classes = useStyles();

  return (
    <main>
      <StatsGridHeaders headers={headers} offset />
      <section className={classes.root}>
        <StatsGridRow name="str" stat={str} />
        <StatsGridRow name="min" stat={min} />
        <StatsGridRow name="dex" stat={dex} />
        <StatsGridRow name="con" stat={con} />
        <StatsGridRow name="per" stat={per} />
        <StatsGridRow name="spi" stat={spi} />
      </section>
    </main>
  );
};

export default StatsGrid;
