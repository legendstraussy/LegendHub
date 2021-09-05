import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    margin: '.75em',
    padding: '.55em',
    backgroundColor: 'rgba(27, 13, 24, .5)',
    display: 'flex',
    flex: 1,
    color: '#fff',
    overflow: 'hidden',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
  left: {
    flex: 3.9,
    margin: '.2em .35em .2em .2em',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
  right: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '.2em .2em .2em .35em',
    overflow: 'hidden',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
  main: {
    margin: '0 0 0 0',
    flex: 1,
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  },
}, { name: 'Mui_Styles_ItemsSearch' });

const Items = () => {
  const classes = useStyles();
  // const router = useRouter()

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div>
          Brian
        </div>
        <div className={classes.main}>
          Beze Bop
        </div>
      </div>
      <div className={classes.right}>
        Tricky Dick
      </div>
    </div>
  );
};

export default Items;
