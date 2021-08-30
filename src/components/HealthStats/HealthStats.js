import HealthStat from 'components/HealthStat/HealthStat';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontWeight: 600,
  },
  stat: {
    display: 'flex',
  },
  label: {
    textTransform: 'uppercase',
    margin: '0 .75em',
  },
  value: {
    color: '#00FF00',
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
