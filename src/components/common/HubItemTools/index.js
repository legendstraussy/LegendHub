import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import HubItemTool from '../HubItemTool';

const useStyles = makeStyles({
  root: {
    height: 'inherit',
    display: 'flex',
    justifyContent: 'space-around',
    background: '#222',
  },
}, { name: 'Mui_Styles_HubItemTools' });

const HubItemTools = props => {
  const { itemId, tools } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {tools?.map(({ color, IconComponent, onClick }, i) => (
        <HubItemTool color={color} key={i} onClick={() => onClick(itemId)}>
          <IconComponent />
        </HubItemTool>
      ))}
    </div>
  );
};

HubItemTools.propTypes = {
  itemId: PropTypes.number,
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      IconComponent: PropTypes.shape({}),
    }),
  ),
};

export default HubItemTools;
