import { useState } from 'react';
import CharacterMarquee from 'components/builder/characterMarquee';
import CharacterStats from 'components/builder/characterStats';
import ItemDetails from 'components/items/itemDetails';
import EquipmentList from 'components/builder/equipmentList';
import DetailTabs from 'components/common/detail/detailTabs';
import HubLayout from 'layouts/hub';
import BuilderLayout from 'layouts/builder';

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
