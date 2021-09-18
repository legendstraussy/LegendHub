// import { PropTypes } from 'prop-types';
import DetailField from 'components/detail/detailField';
import DetailHeader from 'components/detail/detailHeader';
import { makeStyles } from '@material-ui/styles';

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section>
        <DetailHeader title="item detail" />
      </section>
      <section>
        <DetailField label="name" value="a ring of awesomeness" maxWidth="100%" />
      </section>
      <section>
        <DetailHeader title="primary stats" />
      </section>
      <section>
        <div className={classes.container}>
          <DetailField label="str" value={19} />
          <DetailField label="str cap" value={0} />
        </div>
        <div className={classes.container}>
          <DetailField label="min" value={113} />
          <DetailField label="min cap" value={13} />
        </div>
        <div className={classes.container}>
          <DetailField label="dex" value={60} />
          <DetailField label="dex cap" value={0} />
        </div>
        <div className={classes.container}>
          <DetailField label="con" value={72} />
          <DetailField label="con cap" value={0} />
        </div>
        <div className={classes.container}>
          <DetailField label="per" value={40} />
          <DetailField label="per cap" value={0} />
        </div>
        <div className={classes.container}>
          <DetailField label="spi" value={43} />
          <DetailField label="spi cap" value={0} />
        </div>
      </section>
      <section>
        <DetailHeader title="regen" />
      </section>
      <section>
        <div className={classes.container}>
          <DetailField label="HPR" value={4} />
          <DetailField label="MVR" value={3} />
          <DetailField label="MAR" value={30} />
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
          <DetailField label="spell dmg" value={85} />
          <DetailField label="damroll" value={-31} />
        </div>
        <div className={classes.container}>
          <DetailField label="spell crit" value={73} />
          <DetailField label="hitroll" value={-21} />
        </div>
        <div className={classes.container}>
          <DetailField label="spell redux" value={51} />
          <DetailField label="mitigation" value={2} />
        </div>
        <div className={classes.container}>
          <DetailField label="concen" value={30} />
          <DetailField label="parry" value={0} />
        </div>
      </section>
      <section>
        <DetailHeader title="range mods" />
      </section>
      <section>
        <div className={classes.container}>
          <DetailField label="accuracy" value={0} />
        </div>
      </section>
    </div>
  );
};

// ItemDetails.propTypes = {
//   onStatsClick: PropTypes.func,
// };

export default ItemDetails;
