// import { PropTypes } from 'prop-types';
import DetailField from 'components/common/detail/detailField';
import DetailHeader from 'components/common/detail/detailHeader';
import HubChip from 'components/common/hubChip';
import { makeStyles } from '@material-ui/styles';
import theme from 'utils/theme';
import { useRecoilValue } from 'recoil';
import { selectedItemState } from 'data/characterState';

// const item = {
//   name: 'ring of strength',
//   rent: 2500,
//   material: 'silver',
//   timer: -1,
//   weight: 1,
//   price: 5000,
//   ac: -5,
//   align: 'GNE',
//   slots: [
//     { name: 'finger' },
//     { name: 'ear' },
//   ],
//   stats: [
//     { name: 'str', change: 6 },
//     { name: 'per', change: -1 },
//     { name: 'spi', change: -2 },
//     { name: 'damroll', change: 3 },
//     { name: 'hitroll', change: 2 },
//   ],
//   flags: [
//     { name: 'heroic' },
//     { name: 'limited' },
//     { name: 'unique' },
//   ],
// };

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
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
}, { name: 'Mui_Styles_ItemDetails' });

const ItemDetails = () => {
  // const { onStatsClick } = props;
  const item = useRecoilValue(selectedItemState);
  const classes = useStyles();

  // console.log('bingo', item);

  return (
    <div className={classes.root}>
      {!item
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
        )}
    </div>
  );
};

// ItemDetails.propTypes = {
//   onStatsClick: PropTypes.func,
// };

export default ItemDetails;
