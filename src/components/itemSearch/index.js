import { useEffect, useState } from 'react';
import HubInput from 'components/common/hubInput';
import HubSelect from 'components/common/hubSelect';
import HubChip from 'components/common/hubChip';
import { makeStyles } from '@material-ui/styles';
import filtersData from 'data/filters';
import getKeyArrayFromObject from 'utils/utilFns';

const filterOptions = getKeyArrayFromObject(filtersData)
  .map(filter => ({ name: filter?.name, value: filter?.name }));

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
  const [filters, setFilters] = useState(filtersData);
  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      // set recoil state
      console.log('adding filters', filters);
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
          <div className={classes.label}>filters</div>
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
                bgColor="#2E94FA"
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
