import HealthStat from 'components/HealthStat/HeathStat';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    lineHeight: '.5',
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
