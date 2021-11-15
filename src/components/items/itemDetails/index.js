import DetailField from 'components/common/detailField';
import DetailHeader from 'components/common/detailHeader';
import HubChip from 'components/common/hubChip';
import { makeStyles } from '@material-ui/styles';
import theme from 'utils/theme';
import { useRecoilValue } from 'recoil';
import { itemDetailState } from 'data/characterState';
import AllInclusiveRounded from '@material-ui/icons/AllInclusiveRounded';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  container: {
    margin: '0 0 1em 0',
  },
  column: {
    display: 'flex',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  gold: {
    color: theme.palette.main.yellow,
  },
  timer: {
    color: item => item.timer > 0 ? '#fff' : theme.palette.main.yellow,
    display: 'flex',
    alignItems: 'center',
  },
  add: {
    color: theme.palette.main.green,
  },
  sub: {
    color: theme.palette.main.red,
  },
}), { name: 'Mui_Styles_ItemDetails' });

const ItemDetails = () => {
  const item = useRecoilValue(itemDetailState);
  const classes = useStyles(item);

  if (!item.id) {
    return (
      <section className={classes.container}>
        <DetailHeader title="select an item" />
        <div className={classes.container} style={{ fontSize: '14px' }}>
          Select an item from your gear list or from an item search.
        </div>
      </section>
    );
  }

  return (
    <div className={classes.root}>
      <section className={classes.container}>
        <DetailHeader title="item name" />
        <DetailField labelFlex="1" valueFlex="4" label="short" value={item?.short} />
        <DetailField labelFlex="1" valueFlex="4" label="long" value={item?.long} />
      </section>
      <section className={classes.container}>
        <DetailHeader title="general" />
        <section className={classes.column}>
          <DetailField label="ac" value={item?.ac} labelFlex="1" valueFlex="1" />
          <DetailField label="rent" value={item?.rent} labelFlex="1" valueFlex="1" />
        </section>
        <section className={classes.column}>
          <DetailField label="weight" value={<span>{item?.weight} kg</span>} labelFlex="1" valueFlex="1" />
          <DetailField label="material" value={item?.material} labelFlex="1" valueFlex="1" />
        </section>
        <section className={classes.column}>
          <DetailField
            label="price"
            value={<span>{item?.price} <span className={classes.gold}>gp</span></span>}
            labelFlex="1"
            valueFlex="1"
          />
          <DetailField
            label="timer"
            alignItems="center"
            value={(
              <span className={classes.timer}>
                {item?.timer > 0
                  ? <span>{item?.timer} ticks</span>
                  : <AllInclusiveRounded fontSize="small" />}
              </span>
            )}
            labelFlex="1"
            valueFlex="1"
          />
        </section>
      </section>
      <section className={classes.container}>
        <DetailHeader title="slots" />
        <div className={classes.chips}>
          {item.slots.map((slot, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={theme.palette.main.blue}
                color={theme.palette.contrastText.blue}
                label={slot}
                readOnly
              />
            </div>
          ))}
        </div>
      </section>
      <section className={classes.container}>
        <DetailHeader title="stats" />
        <section className={classes.grid}>
          {item.stats.map((stat, i) => (
            <DetailField
              maxWidth="unset"
              key={i}
              label={stat.name}
              value={<span className={stat.value >= 0 ? classes.add : classes.sub}>{stat.value}</span>}
              justifyContent="center"
            />
          ))}
        </section>
      </section>
      <section className={classes.container}>
        <DetailHeader title="additional flags" />
        <div className={classes.chips}>
          {item.flags.map((flag, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={theme.palette.main.blue}
                color={theme.palette.contrastText.blue}
                label={flag.name}
                readOnly
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ItemDetails;
