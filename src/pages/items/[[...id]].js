import { useState } from 'react';
import HubLayout from 'layouts/hub';
import BuilderLayout from 'layouts/builder';
import DetailsTabs from 'components/common/detail/detailTabs';
import ItemList from 'components/items/itemList';
import ItemSearch from 'components/items/itemSearch';
import ItemDetails from 'components/items/itemDetails';
import CharacterMarquee from 'components/builder/characterMarquee';

const Items = () => {
  const [tabs] = useState([
    { name: 'search', iconPath: '/magnifying-glass.png', component: <ItemSearch /> },
    { name: 'item', iconPath: '/swords-emblem.png', component: <ItemDetails /> },
  ]);

  return (
    <HubLayout>
      <BuilderLayout
        main={<ItemList />}
        marquee={<CharacterMarquee />}
        side={<DetailsTabs tabs={tabs} />}
      />
    </HubLayout>
  );
};

export default Items;
