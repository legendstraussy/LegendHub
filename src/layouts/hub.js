import Background from 'components/background';
import NavBar from 'components/hubNavbar/hubNavBar';
import Toolbar from 'components/toolbar';

const Hub = props => {
  const { children } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Background>
        <NavBar />
        <Toolbar />
        {children}
      </Background>
    </div>
  )
};

export default Hub;
