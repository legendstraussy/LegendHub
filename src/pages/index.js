import { useState } from 'react';
import CharacterMarquee from 'components/builder/characterMarquee';
import CharacterStats from 'components/builder/characterStats';
import ItemDetails from 'components/items/itemDetails';
import EquipmentList from 'components/builder/equipmentList';
import DetailTabs from 'components/common/detail/detailTabs';
import HubLayout from 'layouts/hub';
import BuilderLayout from 'layouts/builder';
import Hashids from 'hashids';

const hashids = new Hashids();
const s = hashids.encode(1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 60, 1, 2, 3, 0, 0, 0, 1, 2, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004, 1001, 1002, 1003, 1004)
const o = { name: 'deacon', version: 'badass mage version', s}
console.log('bingo', `${o.name}-${o.version}-${s}`);
console.log('bango', hashids.decode(s))

const Builder = () => {
  const [tabs] = useState([
    { name: 'character', iconPath: '/totem-head.png', component: <CharacterStats /> },
    { name: 'item', iconPath: '/swords-emblem.png', component: <ItemDetails /> },
  ]);

  return (
    <HubLayout>
      <BuilderLayout
        main={<EquipmentList />}
        marquee={<CharacterMarquee />}
        side={<DetailTabs tabs={tabs} />}
      />
    </HubLayout>
  );
};

export default Builder;
