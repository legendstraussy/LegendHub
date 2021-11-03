import { useEffect, useRef } from 'react';
import HubTable from 'components/common/hubTable';
import HubFooter from 'components/common/HubFooter';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Fullscreen from '@material-ui/icons/Fullscreen';
import CharacterMarquee from 'components/builder/characterMarquee';
import MarqueeTable from 'components/builder/marqueeTable';
// import usePagination from 'hooks/usePagination';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { equipmentState, selectedItemState } from 'data/characterState';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
}), { name: 'Mui_Styles_CharacterEquipment' });

const CharacterEquipment = () => {
  const scrollRef = useRef(null);
  // const {
  //   options,
  //   actions,
  // } = usePagination({ page: 0, rowsPerPage: 25 });
  const classes = useStyles();
  const equipment = useRecoilValue(equipmentState);
  const setTab = useSetRecoilState(selectedItemState);

  const handleItemDetailClick = item => {
    setTab({
      ...item,
      flags: [],
    });
  };

  const handleItemRemoveClick = () => {
  };

  const headers = [
    {
      id: 'slot', label: 'slot', type: 'header', width: 65, align: 'right', hideBorder: true,
    },
    {
      id: 'name',
      label: 'item',
      type: 'header',
      width: 289,
      align: 'left',
      tools: [
        { IconComponent: Fullscreen, onClick: handleItemDetailClick },
        { IconComponent: DeleteOutlineIcon, onClick: handleItemRemoveClick },
      ],
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
  ];

  useEffect(() => {
    // eslint-disable-next-line no-undef
    scrollRef.current = document.querySelector('.Mui_Styles_MarqueeTable-marquee');
  }, []);

  return (
    <MarqueeTable
      marquee={<CharacterMarquee />}
    >
      {equipment && (
        <div className={classes.root}>
          <HubTable
            data={{ items: equipment, total: equipment.length }}
            // options={options}
            headers={headers}
            footer={false}
            scrollRef={scrollRef}
            // updateOptions={actions.setOptions}
          />
          <HubFooter />
        </div>
      )}
    </MarqueeTable>
  );
};

export default CharacterEquipment;