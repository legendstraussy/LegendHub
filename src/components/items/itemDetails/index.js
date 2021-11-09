import DetailField from 'components/common/detail/detailField';
import DetailHeader from 'components/common/detail/detailHeader';
// import HubChip from 'components/common/hubChip';
import { makeStyles } from '@material-ui/styles';
// import theme from 'utils/theme';
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
  // chips: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  gold: {
    color: theme.palette.main.yellow,
  },
  timer: {
    color: item => item.timer > 0 ? '#fff' : theme.palette.main.yellow,
    display: 'flex',
    alignItems: 'center',
  },
}), { name: 'Mui_Styles_ItemDetails' });

const ItemDetails = () => {
  const item = useRecoilValue(itemDetailState);
  const classes = useStyles();

  if (!item) {
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
        <DetailField maxWidth="100%" label="short" value={item?.short} />
        <DetailField maxWidth="100%" label="long" value={item?.long} />
      </section>
      <section className={classes.container}>
        <DetailHeader title="general" />
        <section className={classes.column}>
          <DetailField label="ac" value={item?.ac} />
          <DetailField label="rent" value={item?.rent} />
        </section>
        <section className={classes.column}>
          <DetailField label="weight" value={<span>{item?.weight} kg</span>} />
          <DetailField label="material" value={item?.material} />
        </section>
        <section className={classes.column}>
          <DetailField
            label="price"
            value={<span>{item?.price} <span className={classes.gold}>gp</span></span>}
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
          />
        </section>
      </section>
      <section className={classes.container}>
        <DetailHeader title="stats" />
        <section className={classes.grid}>
          {item.stats.map((stat, i) => (
            <DetailField maxWidth="unset" key={i} label={stat.name} value={stat.value} />
          ))}
        </section>
        {/* <section className={classes.column}>
          <DetailField label="str" value={item?.str} />
          <DetailField label="min" value={item?.min} />
        </section>
        <section className={classes.column}>
          <DetailField label="dex" value={item?.dex} />
          <DetailField label="con" value={item?.con} />
        </section>
        <section className={classes.column}>
          <DetailField label="per" value={item?.per} />
          <DetailField label="spi" value={item?.spi} />
        </section> */}
      </section>
      {/* {!item
        ? (
          <>
            <section>
              <DetailHeader title="No item selected" />
            </section>
            <section>
              <div className={classes.container} style={{ fontSize: '14px' }}>
                Select an item from your gear list or from an item search.
              </div>
            </section>
          </>
        )
        : (
          <>
            <section>
              <DetailHeader title={item.name} />
            </section>
            <section>
              <div className={classes.container}>
                <DetailField label="rent" value={item.rent} />
                <DetailField label="price" value={item.price} />
              </div>
              <div className={classes.container}>
                <DetailField label="weight" value={item.weight} />
                <DetailField label="material" value={item.material} />
              </div>
              <div className={classes.container}>
                <DetailField label="timer" value={item.timer} />
              </div>
            </section>
            <section>
              <DetailHeader title="slots" />
            </section>
            <section>
              <div className={classes.chips}>
                {item.slots.map((slot, i) => (
                  <div key={i} style={{ margin: '.25em' }}>
                    <HubChip
                      bgColor={theme.palette.main.blue}
                      color={theme.palette.contrastText.blue}
                      label={slot.name}
                      readOnly
                    />
                  </div>
                ))}
              </div>
            </section>
            <section>
              <DetailHeader title="stats" />
            </section>
            <section>
              <div className={classes.container} style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
                {item.stats?.map((stat, i) => (
                  <DetailField key={i} label={stat?.name} value={stat?.change} maxWidth="100%" />
                ))}
              </div>
            </section>
            <section>
              <DetailHeader title="additional flags" />
            </section>
            <section>
              <div className={classes.chips}>
                {item.flags.map((slot, i) => (
                  <div key={i} style={{ margin: '.25em' }}>
                    <HubChip
                      bgColor={theme.palette.main.blue}
                      color={theme.palette.contrastText.blue}
                      label={slot.name}
                      readOnly
                    />
                  </div>
                ))}
              </div>
            </section>
          </>
        )} */}
    </div>
  );
};

export default ItemDetails;
