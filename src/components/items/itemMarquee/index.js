import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { stats } from 'data/constants';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: '36px',
    margin: '0 0 .2em 0',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    borderRadius: '5px',
    cursor: 'default',
  },
  equipped: {
    width: 65,
    padding: '0 10px',
    fontSize: 10,
    fontWeight: 800,
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  stud: {
    width: 10,
    height: 10,
    background: 'rgba(105, 85, 85, .5)',
  },
  iconStat: {
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 600,
  },
  item: {
    width: 249.5,
    padding: '0 10px',
    fontSize: 14,
    fontWeight: 600,
  },
  ac: {
    width: 35,
    display: 'flex',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 700,
  },
  align: {
    width: 55,
    display: 'flex',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 700,
  },
  rent: {
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 700,
  },
}, { name: 'Mui_Styles_ItemMarquee' });

const HubStud = () => {
  const classes = useStyles();

  return (
    <div className={classes.stud} />
  );
};

const ItemMarquee = props => {
  const { eqItem = {} } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.equipped}>equipped</div>
      <div className={classes.item}>{eqItem.name}</div>
      <div className={classes.iconStat} style={{ color: stats.str.color }}>{eqItem.str || <HubStud />}</div>
      <div className={classes.iconStat} style={{ color: stats.min.color }}>{eqItem.min || <HubStud />}</div>
      <div className={classes.iconStat} style={{ color: stats.dex.color }}>{eqItem.dex || <HubStud />}</div>
      <div className={classes.iconStat} style={{ color: stats.con.color }}>{eqItem.con || <HubStud />}</div>
      <div className={classes.iconStat} style={{ color: stats.per.color }}>{eqItem.per || <HubStud />}</div>
      <div className={classes.iconStat} style={{ color: stats.spi.color }}>{eqItem.spi || <HubStud />}</div>
      <div className={classes.ac}>{eqItem.ac || <HubStud />}</div>
      <div className={classes.align}>{eqItem.align || <HubStud />}</div>
      <div className={classes.rent}>{eqItem.rent || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.mitigation || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.damroll || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.hitroll || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.parry || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.accuracy || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.spellCrit || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.spellDam || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.spellRedux || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.concentration || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.hpRegen || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.mvRegen || <HubStud />}</div>
      <div className={classes.iconStat}>{eqItem.maRegen || <HubStud />}</div>
    </div>
  );
};

ItemMarquee.propTypes = {
  eqItem: PropTypes.shape({
    name: PropTypes.string,
    str: PropTypes.number,
    min: PropTypes.number,
    dex: PropTypes.number,
    con: PropTypes.number,
    per: PropTypes.number,
    spi: PropTypes.number,
    ac: PropTypes.number,
    align: PropTypes.string,
    rent: PropTypes.number,
    mitigation: PropTypes.number,
    hitroll: PropTypes.number,
    damroll: PropTypes.number,
    parry: PropTypes.number,
    spellDam: PropTypes.number,
    spellCrit: PropTypes.number,
    spellRedux: PropTypes.number,
    concentration: PropTypes.number,
    accuracy: PropTypes.number,
    hpRegen: PropTypes.number,
    mvRegen: PropTypes.number,
    maRegen: PropTypes.number,
  }),
};

export default ItemMarquee;
