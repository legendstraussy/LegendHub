import HealthStat from 'components/HealthStat/HeathStat';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontSize: '8pt',
    // fontWeight: 700,
  },
  stat: {
    margin: '0 .5em',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    textTransform: 'uppercase',
    margin: '0 .75em',
  },
  value: {
    color: '#00FF00',
    fontSize: '10pt',
  },
}, { name: 'Mui_Styles_HealthStats' });

const HealthStats = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HealthStat label="hp" stat={750} />
      <HealthStat label="mv" stat={827} />
      <HealthStat label="ma" stat={342} />
    </div>
  );
};

export default HealthStats;
