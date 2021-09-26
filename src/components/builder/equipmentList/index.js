import { useState } from 'react';
import HubTable from 'components/common/hubTable';
import HubFooter from 'components/common/HubFooter';
import HubTooledCell from 'components/common/hubTooledCell';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Fullscreen from '@material-ui/icons/Fullscreen';

const EquipmentList = () => {
  const [tools] = useState([
    { color: '#fff', IconComponent: Fullscreen },
    { color: '#fff', IconComponent: DeleteOutlineIcon },
  ]);
  const [headers] = useState([
    {
      id: 'slot', label: 'slot', type: 'header', width: 65, align: 'right', hideBorder: true,
    },
    {
      id: 'name', label: 'item', type: 'header', width: 250, align: 'left', cellComponent: <HubTooledCell tools={tools} width="inherit" />,
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

  return (
    <div style={{ overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
      <HubTable headers={headers} footer={false} />
      <HubFooter />
    </div>
  );
};

export default EquipmentList;
