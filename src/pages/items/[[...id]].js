import { useState } from 'react';
import HubLayout from 'layouts/hub';
import BuilderLayout from 'layouts/builder';
import DetailTabs from 'components/common/detail/detailTabs';
import ItemList from 'components/items/itemList';
import ItemSearch from 'components/items/itemSearch';
import ItemDetails from 'components/items/itemDetails';
import ItemMarquee from 'components/items/itemMarquee';

const equippedItem = {
  name: 'ring of strength',
  rent: 2932,
  ac: -10,
  align: 'GNE',
  str: 8,
  spi: -2,
  damroll: 2,
};

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
        marquee={<ItemMarquee equipped={equippedItem} />}
        side={<DetailTabs tabs={tabs} defaultTab={defaultTab} />}
      />
    </HubLayout>
  );
};

export default Items;
