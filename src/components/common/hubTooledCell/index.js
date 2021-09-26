import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import HubItemTools from 'components/common/HubItemTools';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: props => props?.width ?? '',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      '& > .Mui_Styles_HubItemTools-root': {
        color: 'red',
        opacity: '1 !important',
        width: 'max-content !important',
        transition: 'opacity .2s ease-in-out',
      },
    },
  },
}), { name: 'Mui_Styles_hubTooledCell' });

const HubTooledCell = props => {
  const { label, text = 'empty', tools } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div data-value={label}>
        {text}
      </div>
      <HubItemTools tools={tools} {...props} />
    </div>
  );
};

HubTooledCell.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  tools: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

export default HubTooledCell;
