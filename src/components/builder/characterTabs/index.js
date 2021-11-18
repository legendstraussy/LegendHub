import { useEffect } from 'react';
import CharacterDetails from 'components/builder/characterDetails';
import ItemDetails from 'components/items/itemDetails';
import HubTabs from 'components/common/hubTabs/hubTabs';
import HubTab from 'components/common/hubTabs/hubTab';
import HubTabDetails from 'components/common/hubTabs/hubTabDetails';
import HubTabDetail from 'components/common/hubTabs/hubTabDetail';
import { TAB_KEYS } from 'data/constants';
import { useRecoilState } from 'recoil';
import { selectedTabState } from 'data/characterState';

const CharacterTabs = () => {
  const [activeTab, setActiveTab] = useRecoilState(selectedTabState);

  useEffect(() => {
    setActiveTab(TAB_KEYS.CHARACTER);
  }, [setActiveTab]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <HubTabs>
        <HubTab
          isActive={activeTab === TAB_KEYS.CHARACTER}
          onTabClick={setActiveTab}
          label="character"
          iconPath="/totem-head.png"
        />
        <HubTab
          isActive={activeTab === TAB_KEYS.ITEM}
          onTabClick={setActiveTab}
          label="item"
          iconPath="/swords-emblem.png"
        />
      </HubTabs>
      <HubTabDetails>
        <HubTabDetail isActive={activeTab === TAB_KEYS.CHARACTER}>
          <CharacterDetails />
        </HubTabDetail>
        <HubTabDetail isActive={activeTab === TAB_KEYS.ITEM}>
          <ItemDetails />
        </HubTabDetail>
      </HubTabDetails>
    </div>
  );
};

export default CharacterTabs;
