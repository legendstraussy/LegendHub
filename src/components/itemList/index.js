import { useState } from 'react';
import HubTable from 'components/common/HubTable';

const ItemList = () => {
  const [headers] = useState([
    {
      id: 'slot', label: 'slot', class: 'header', width: 65, align: 'right', hideBorder: true,
    },
    {
      id: 'name', label: 'item', class: 'header', width: 250, align: 'left',
    },
    {
      id: 'str', label: 'str', class: 'icon', leftEnd: true, iconPath: '/winged-sword.png', width: 40,
    },
    {
      id: 'min', label: 'min', class: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'dex', label: 'dex', class: 'icon', iconPath: '/high-five.png', width: 40,
    },
    {
      id: 'con', label: 'con', class: 'icon', iconPath: '/heart-wings.png', width: 40,
    },
    {
      id: 'per', label: 'per', class: 'icon', iconPath: '/spyglass.png', width: 40,
    },
    {
      id: 'spi', label: 'spi', rightEnd: true, class: 'icon', iconPath: '/vine-leaf.png', width: 40,
    },
    {
      id: 'ac', label: 'ac', class: 'header', width: 35,
    },
    {
      id: 'align', label: 'align', class: 'header', width: 55,
    },
    {
      id: 'rent', label: 'rent', class: 'header', width: 50,
    },
    {
      id: 'damroll', label: 'dam', leftEnd: true, class: 'icon', iconPath: '/sword-wound.png', width: 40,
    },
    {
      id: 'hitroll', label: 'hit', class: 'icon', iconPath: '/sword-wound.png', width: 40,
    },
    {
      id: 'mitigation', label: 'mit', rightEnd: true, class: 'icon', iconPath: '/shield-reflect.png', width: 40,
    },
    {
      id: 'parry', label: 'parry', rightEnd: true, leftEnd: true, class: 'icon', iconPath: '/fencer.png', width: 40,
    },
    {
      id: 'accuracy', label: 'acc', leftEnd: true, rightEnd: true, class: 'icon', iconPath: '/high-shot.png', width: 40,
    },
    {
      id: 'spellDam', label: 'dam', leftEnd: true, class: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'spellCrit', label: 'crit', class: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'spellRedux', label: 'rdux', class: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'concentration', label: 'conc', rightEnd: true, class: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'hpRegen', label: 'hpr', leftEnd: true, class: 'icon', iconPath: '/hpRegen.png', width: 40,
    },
    {
      id: 'mvRegen', label: 'mvr', class: 'icon', iconPath: '/mvRegen.png', width: 40,
    },
    {
      id: 'maRegen', label: 'mar', rightEnd: true, class: 'icon', iconPath: '/maRegen.png', width: 40,
    },
  ]);

  return (
    <HubTable headers={headers} />
  );
};

export default ItemList;
