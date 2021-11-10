import { useEffect } from 'react';
import CharacterStats from 'components/builder/characterStats';
import ItemDetails from 'components/items/itemDetails';
import HubTabs from 'components/common/hubTabs/hubTabs';
import HubTab from 'components/common/hubTabs/hubTab';
import HubTabDetails from 'components/common/hubTabs/hubTabDetails';
import HubTabDetail from 'components/common/hubTabs/hubTabDetail';
import { tabKeys } from 'data/constants';
import { useRecoilState } from 'recoil';
import { selectedTabState } from 'data/characterState';

const CharacterTabs = () => {
  const [activeTab, setActiveTab] = useRecoilState(selectedTabState);

  useEffect(() => {
    setActiveTab(tabKeys.CHARACTER);
  }, [setActiveTab]);

  // TODO: make it HubTabs etc.
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <HubTabs>
        <HubTab
          isActive={activeTab === tabKeys.CHARACTER}
          onTabClick={setActiveTab}
          label="character"
          iconPath="/totem-head.png"
        />
        <HubTab
          isActive={activeTab === tabKeys.ITEM}
          onTabClick={setActiveTab}
          label="item"
          iconPath="/swords-emblem.png"
        />
      </HubTabs>
      <HubTabDetails>
        <HubTabDetail isActive={activeTab === tabKeys.CHARACTER}>
          <CharacterStats />
        </HubTabDetail>
        <HubTabDetail isActive={activeTab === tabKeys.ITEM}>
          <ItemDetails />
        </HubTabDetail>
      </HubTabDetails>
    </div>
  );
};

export default CharacterTabs;
