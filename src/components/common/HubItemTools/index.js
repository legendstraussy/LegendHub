import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import HubItemTool from '../HubItemTool';

const useStyles = makeStyles({
  root: {
    width: 0,
    height: 'inherit',
    display: props => props.item?.id ? 'flex' : 'none',
    justifyContent: 'space-around',
    background: '#222',
    opacity: 0,
  },
}, { name: 'Mui_Styles_HubItemTools' });

const HubItemTools = React.memo(props => {
  const { item, tools } = props;
  const classes = useStyles(props);

  return (
    <span className={classes.root}>
      {tools?.map(({ color, IconComponent }, i) => (
        <HubItemTool color={color} key={i} onClick={() => console.log('bingo', item)}>
          <IconComponent />
        </HubItemTool>
      ))}
    </span>
  );
});

HubItemTools.propTypes = {
  item: PropTypes.shape({}),
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      IconComponent: PropTypes.shape({}),
    }),
  ),
};

export default HubItemTools;
