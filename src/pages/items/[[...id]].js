import { useState } from 'react';
import HubLayout from 'layouts/hub';
import BuilderLayout from 'layouts/builder';
import DetailTabs from 'components/common/detail/detailTabs';
import ItemList from 'components/items/itemList';
import ItemSearch from 'components/items/itemSearch';
import ItemDetails from 'components/items/itemDetails';
import CharacterMarquee from 'components/builder/characterMarquee';

const Items = () => {
  const [tabs] = useState([
    { name: 'search', iconPath: '/magnifying-glass.png', component: <ItemSearch /> },
    { name: 'item', iconPath: '/swords-emblem.png', component: <ItemDetails /> },
  ]);
  const [defaultTab] = useState(tabs.findIndex(tab => tab.name === 'item'));

  return (
    <HubLayout>
      <BuilderLayout
        main={<ItemList />}
        marquee={<CharacterMarquee />}
        side={<DetailTabs tabs={tabs} defaultTab={defaultTab} />}
      />
    </HubLayout>
  );
};

export default Items;
