import { useEffect, useRef } from 'react';
import HubTable from 'components/common/hubTable';
import HubFooter from 'components/common/HubFooter';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Fullscreen from '@material-ui/icons/Fullscreen';
import CharacterMarquee from 'components/builder/characterMarquee';
import MarqueeTable from 'components/builder/marqueeTable';
import HubTableHeader from 'components/common/hubTableHeader';
import HubTooledCell from 'components/common/hubTooledCell';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { equipmentState, selectedItemState } from 'data/characterState';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  short: {
    textAlign: 'left',
  },
  str: {
    color: theme.palette.main.red,
  },
  min: {
    color: theme.palette.main.purple,
  },
  dex: {
    color: theme.palette.main.blue,
  },
  con: {
    color: theme.palette.main.yellow,
  },
  per: {
    color: theme.palette.main.cyan,
  },
  spi: {
    color: theme.palette.main.green,
  },
}), { name: 'Mui_Styles_CharacterEquipment' });

const CharacterEquipment = () => {
  const scrollRef = useRef(null);
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
      hideBorder: true,
      id: 'slot',
      renderHeader: () => (<HubTableHeader id="slot" label="slot" />),
      width: 65,
    },
    {
      id: 'short',
      label: 'item',
      className: classes.short,
      width: 289,
      renderRow: row => (
        <HubTooledCell
          item={row}
          label="short"
          text={row['short']}
          tools={[
            { IconComponent: Fullscreen, onClick: handleItemDetailClick },
            { IconComponent: DeleteOutlineIcon, onClick: handleItemRemoveClick },
          ]}
        />
      ),
    },
    {
      id: 'str', className: classes.str, label: 'str', type: 'icon', leftEnd: true, iconPath: '/winged-sword.png', width: 40,
    },
    {
      id: 'min', className: classes.min, label: 'min', type: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'dex', className: classes.dex, label: 'dex', type: 'icon', iconPath: '/high-five.png', width: 40,
    },
    {
      id: 'con', className: classes.con, label: 'con', type: 'icon', iconPath: '/heart-wings.png', width: 40,
    },
    {
      id: 'per', className: classes.per, label: 'per', type: 'icon', iconPath: '/spyglass.png', width: 40,
    },
    {
      id: 'spi', className: classes.spi, label: 'spi', rightEnd: true, type: 'icon', iconPath: '/vine-leaf.png', width: 40,
    },
    {
      id: 'ac', label: 'ac', width: 35,
    },
    {
      id: 'align', label: 'align', width: 55,
    },
    {
      id: 'rent', label: 'rent', width: 50,
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
      id: 'hp', label: 'hp', width: 40,
    },
    {
      id: 'mv', label: 'mv', width: 40,
    },
    {
      id: 'ma', label: 'ma', width: 40,
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
            headers={headers}
            footer={false}
            scrollRef={scrollRef}
          />
          <HubFooter />
        </div>
      )}
    </MarqueeTable>
  );
};

export default CharacterEquipment;
