// import { useState } from 'react';
import HubLayout from 'layouts/hub';
import BuilderLayout from 'layouts/builder';
import ItemList from 'components/items/itemList';
// import ItemSearch from 'components/items/itemSearch';
// import ItemDetails from 'components/items/itemDetails';
import ItemMarquee from 'components/items/itemMarquee';

const eqItem = {
  name: 'ring of strength',
  rent: 2932,
  ac: -10,
  align: 'GNE',
  str: 8,
  spi: -2,
  damroll: 2,
};

// const [tabs] = useState([
//   { name: 'search', iconPath: '/magnifying-glass.png', component: <ItemSearch /> },
//   { name: 'item', iconPath: '/swords-emblem.png', component: <ItemDetails /> },
// ]);
const Items = () => (
  <HubLayout>
    <BuilderLayout
      main={<ItemList />}
      marquee={<ItemMarquee eqItem={eqItem} />}
      side={<div>tricky dick</div>}
    />
  </HubLayout>
);
export default Items;
