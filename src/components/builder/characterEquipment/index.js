import { useEffect, useRef } from 'react';
import HubTable from 'components/common/hubTable';
import HubFooter from 'components/common/HubFooter';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Fullscreen from '@material-ui/icons/Fullscreen';
import CharacterMarquee from 'components/builder/characterMarquee';
import MarqueeTable from 'components/builder/marqueeTable';
import HubTableHeader from 'components/common/hubTableHeader';
import HubTooledCell from 'components/common/hubTooledCell';
import IconHeader from 'components/common/iconHeader';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { equipmentState, selectedItemState, selectedTabState } from 'data/characterState';
import { makeStyles } from '@material-ui/styles';
import { tabKeys } from 'data/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  slot: {
    justifyContent: 'center',
  },
  short: {
    justifyContent: 'left',
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
  const selectItem = useSetRecoilState(selectedItemState);
  const setTab = useSetRecoilState(selectedTabState);

  const handleItemDetailClick = item => {
    selectItem({
      ...item,
      flags: [],
    });
    setTab(tabKeys.ITEM);
  };

  const handleItemRemoveClick = () => {
  };

  const headers = [
    {
      id: 'slot',
      customHeader: <HubTableHeader id="slot" label="slot" />,
      className: classes.slot,
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
      id: 'str',
      className: classes.str,
      width: 40,
      customHeader: (
        <IconHeader
          leftEnd
          iconPath="/winged-sword.png"
          label="str"
        />
      ),
    },
    {
      id: 'min',
      className: classes.min,
      width: 40,
      customHeader: (
        <IconHeader
          iconPath="/spell-book.png"
          label="min"
        />
      ),
    },
    {
      id: 'dex',
      className: classes.dex,
      width: 40,
      customHeader: (
        <IconHeader
          iconPath="/high-five.png"
          label="dex"
        />
      ),
    },
    {
      id: 'con',
      className: classes.con,
      width: 40,
      customHeader: (
        <IconHeader
          iconPath="/heart-wings.png"
          label="con"
        />
      ),
    },
    {
      id: 'per',
      className: classes.per,
      width: 40,
      customHeader: (
        <IconHeader
          iconPath="/spyglass.png"
          label="per"
        />
      ),
    },
    {
      id: 'spi',
      className: classes.spi,
      width: 40,
      customHeader: (
        <IconHeader
          rightEnd
          iconPath="/vine-leaf.png"
          label="spi"
        />
      ),
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
      id: 'damroll',
      width: 40,
      customHeader: (
        <IconHeader
          leftEnd
          iconPath="/sword-wound.png"
          label="dam"
        />
      ),
    },
    {
      id: 'hitroll',
      width: 40,
      customHeader: (
        <IconHeader
          iconPath="/sword-wound.png"
          label="hit"
        />
      ),
    },
    {
      id: 'mitigation',
      width: 40,
      customHeader: (
        <IconHeader
          rightEnd
          iconPath="/sword-wound.png"
          label="mit"
        />
      ),
    },
    {
      id: 'parry',
      width: 40,
      customHeader: (
        <IconHeader
          leftEnd
          rightEnd
          iconPath="/fencer.png"
          label="parry"
        />
      ),
    },
    {
      id: 'accuracy',
      width: 40,
      customHeader: (
        <IconHeader
          leftEnd
          rightEnd
          iconPath="/high-shot.png"
          label="acc"
        />
      ),
    },
    {
      id: 'spellDam',
      width: 40,
      customHeader: (
        <IconHeader
          leftEnd
          iconPath="/spell-book.png"
          label="dam"
        />
      ),
    },
    {
      id: 'spellCrit',
      width: 40,
      customHeader: (
        <IconHeader
          iconPath="/spell-book.png"
          label="crit"
        />
      ),
    },
    {
      id: 'spellRedux',
      width: 40,
      customHeader: (
        <IconHeader
          iconPath="/spell-book.png"
          label="redux"
        />
      ),
    },
    {
      id: 'concentration',
      width: 40,
      customHeader: (
        <IconHeader
          rightEnd
          iconPath="/spell-book.png"
          label="conc"
        />
      ),
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
      id: 'hpRegen',
      width: 40,
      customHeader: (
        <IconHeader
          leftEnd
          iconPath="/hpRegen.png"
          label="hpr"
        />
      ),
    },
    {
      id: 'mvRegen',
      width: 40,
      customHeader: (
        <IconHeader
          iconPath="/mvRegen.png"
          label="mvr"
        />
      ),
    },
    {
      id: 'maRegen',
      width: 40,
      customHeader: (
        <IconHeader
          rightEnd
          iconPath="/maRegen.png"
          label="mar"
        />
      ),
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
      <div className={classes.root}>
        <HubTable
          data={{ items: equipment, total: equipment.length }}
          headers={headers}
          footer={false}
          scrollRef={scrollRef}
        />
        <HubFooter />
      </div>
    </MarqueeTable>
  );
};

export default CharacterEquipment;
