import { PropTypes } from 'prop-types';
import Background from 'components/main/background';
import NavBar from 'components/main/hubNavbar/hubNavBar';
import Toolbar from 'components/common/toolbar';

const Hub = props => {
  const { children } = props;

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden',
    }}
    >
      <Background>
        <NavBar />
        <Toolbar />
        {children}
      </Background>
    </div>
  );
};

Hub.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hub;
