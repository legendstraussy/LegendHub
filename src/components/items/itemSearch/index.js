import { useEffect, useState } from 'react';
import HubInput from 'components/common/hubInput';
import HubSelect from 'components/common/hubSelect';
import HubChip from 'components/common/hubChip';
import { makeStyles } from '@material-ui/styles';
import {
  itemFilters,
  slots,
  weaponStats,
  weaponTypes,
} from 'data/constants';
import getKeyArrayFromObject from 'utils/utilFns';
import theme from 'utils/theme';

const filterOptions = getKeyArrayFromObject(itemFilters)
  .map(filter => ({ name: filter?.name, value: filter?.name }));

const slotOptions = getKeyArrayFromObject(slots)
  .map(slot => ({ name: slot?.name, value: slot?.name }));

const weaponStatOptions = getKeyArrayFromObject(weaponStats)
  .map(stat => ({ name: stat?.name, value: stat?.name }));

const weaponTypeOptions = getKeyArrayFromObject(weaponTypes)
  .map(type => ({ name: type?.name, value: type?.name }));

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    '& section': {
      margin: '0 0 1em 0',
    },
    '& header': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  label: {
    color: '#FFD874',
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  toolbar: {
    display: 'flex',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}, { name: 'Mui_Styles_ItemSearch' });

const ItemSearch = () => {
  const [search, setSearch] = useState('');
  const [slot, setSlot] = useState('');
  const [weaponStat, setWeaponStat] = useState('');
  const [weaponType, setWeaponType] = useState('');
  const [filters, setFilters] = useState(itemFilters);
  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      // set recoil state
    }, 2000);
    return () => clearTimeout(timer);
  }, [filters]);

  const handleAddFilter = filterName => {
    if (!filters.find(filter => filter?.name === filterName)) {
      setFilters([...filters, { name: filterName }]);
    }
  };

  const handleRemoveFilter = filter => setFilters(filters.filter(f => f?.name !== filter?.name));

  return (
    <div className={classes.root}>
      <section>
        <header>
          <div className={classes.label}>item name</div>
        </header>
      </section>
      <section>
        <HubInput value={search} onChange={setSearch} />
      </section>
      <section>
        <header>
          <div className={classes.label}>slot</div>
        </header>
      </section>
      <section>
        <HubSelect
          defaultText="Any slot"
          onChange={setSlot}
          options={slotOptions}
          value={slot}
        />
      </section>
      {slot === 'wield' && (
        <>
          <section>
            <header>
              <div className={classes.label}>weapon type</div>
            </header>
          </section>
          <section>
            <HubSelect
              defaultText="Any weapon type"
              onChange={setWeaponType}
              options={weaponTypeOptions}
              value={weaponType}
            />
          </section>
          <section>
            <header>
              <div className={classes.label}>weapon stat</div>
            </header>
          </section>
          <section>
            <HubSelect
              defaultText="Any weapon stat"
              onChange={setWeaponStat}
              options={weaponStatOptions}
              value={weaponStat}
            />
          </section>
        </>
      )}
      <section>
        <header>
          <div className={classes.label}>additional filters</div>
        </header>
      </section>
      <section>
        <HubSelect
          defaultText="Select a filter"
          onChange={handleAddFilter}
          options={filterOptions}
          value="Select a filter"
        />
      </section>
      <section>
        <div className={classes.chips}>
          {filters.map((filter, i) => (
            <div key={i} style={{ margin: '.25em' }}>
              <HubChip
                bgColor={theme.palette.main.blue}
                color={theme.palette.contrastText.blue}
                label={filter.name}
                onDelete={() => handleRemoveFilter(filter)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ItemSearch;
