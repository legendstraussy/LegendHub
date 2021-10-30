import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import HubItemTool from '../HubItemTool';

const useStyles = makeStyles({
  root: {
    height: 'inherit',
    display: 'flex',
    justifyContent: 'flex-end',
    background: '#222',
  },
}, { name: 'Mui_Styles_HubItemTools' });

const HubItemTools = props => {
  const { item, tools } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {tools?.map(({ color, IconComponent, onClick }, i) => (
        <HubItemTool color={color} key={i} onClick={() => onClick(item)}>
          <IconComponent />
        </HubItemTool>
      ))}
    </div>
  );
};

HubItemTools.propTypes = {
  item: PropTypes.shape({}),
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      IconComponent: PropTypes.shape({}),
    }),
  ),
};

export default HubItemTools;
