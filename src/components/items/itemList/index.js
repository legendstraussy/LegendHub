import { useEffect, useState, useRef } from 'react';
import HubTable from 'components/common/hubTable';

const ItemList = () => {
  const [headers] = useState([
    {
      id: 'slot', label: 'slot', type: 'header', width: 65, align: 'right', hideBorder: true,
    },
    {
      id: 'name', label: 'item', type: 'header', width: 250, align: 'left', cellWidth: 'inherit',
    },
    {
      id: 'str', label: 'str', type: 'icon', leftEnd: true, iconPath: '/winged-sword.png', width: 40,
    },
    {
      id: 'min', label: 'min', type: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'dex', label: 'dex', type: 'icon', iconPath: '/high-five.png', width: 40,
    },
    {
      id: 'con', label: 'con', type: 'icon', iconPath: '/heart-wings.png', width: 40,
    },
    {
      id: 'per', label: 'per', type: 'icon', iconPath: '/spyglass.png', width: 40,
    },
    {
      id: 'spi', label: 'spi', rightEnd: true, type: 'icon', iconPath: '/vine-leaf.png', width: 40,
    },
    {
      id: 'ac', label: 'ac', type: 'header', width: 35,
    },
    {
      id: 'align', label: 'align', type: 'header', width: 55,
    },
    {
      id: 'rent', label: 'rent', type: 'header', width: 50,
    },
    {
      id: 'damroll', label: 'dam', leftEnd: true, type: 'icon', iconPath: '/sword-wound.png', width: 40,
    },
    {
      id: 'hitroll', label: 'hit', type: 'icon', iconPath: '/sword-wound.png', width: 40,
    },
    {
      id: 'mitigation', label: 'mit', rightEnd: true, type: 'icon', iconPath: '/shield-reflect.png', width: 40,
    },
    {
      id: 'parry', label: 'parry', rightEnd: true, leftEnd: true, type: 'icon', iconPath: '/fencer.png', width: 40,
    },
    {
      id: 'accuracy', label: 'acc', leftEnd: true, rightEnd: true, type: 'icon', iconPath: '/high-shot.png', width: 40,
    },
    {
      id: 'spellDam', label: 'dam', leftEnd: true, type: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'spellCrit', label: 'crit', type: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'spellRedux', label: 'rdux', type: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'concentration', label: 'conc', rightEnd: true, type: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'hpRegen', label: 'hpr', leftEnd: true, type: 'icon', iconPath: '/hpRegen.png', width: 40,
    },
    {
      id: 'mvRegen', label: 'mvr', type: 'icon', iconPath: '/mvRegen.png', width: 40,
    },
    {
      id: 'maRegen', label: 'mar', rightEnd: true, type: 'icon', iconPath: '/maRegen.png', width: 40,
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    scrollRef.current = document.querySelector('.Mui_Styles_Builder-marquee');
  }, []);

  return (
    <HubTable
      headers={headers}
    />
  );
};

export default ItemList;
