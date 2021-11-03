import { useState } from 'react';
import CharacterStats from 'components/builder/characterStats';
import ItemDetails from 'components/items/itemDetails';
import DetailTabs from 'components/common/detail/detailTabs';

const CharacterTabs = () => {
  const [tabs] = useState([
    { name: 'character', iconPath: '/totem-head.png', component: <CharacterStats /> },
    { name: 'item', iconPath: '/swords-emblem.png', component: <ItemDetails /> },
  ]);

  return (
    <DetailTabs tabs={tabs} />
  );
};

export default CharacterTabs;
