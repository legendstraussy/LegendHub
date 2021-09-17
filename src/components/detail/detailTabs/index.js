import { useState } from 'react';
import { PropTypes } from 'prop-types';
import Tabs from 'components/hubTabs/tabs';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  },
}, { name: 'Mui_Styles_DetailsTabs' });

const DetailTabs = props => {
  const { tabs = [] } = props;
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const classes = useStyles();

  const handleTabClick = tab => setActiveTab(tab);

  return (
    <div className={classes.root}>
      <Tabs tabs={tabs} onTabClick={handleTabClick} activeTab={activeTab} />
    </div>
  );
};

DetailTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

export default DetailTabs;
