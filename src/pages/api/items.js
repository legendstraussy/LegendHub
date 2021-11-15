import { sort as fastSort } from 'fast-sort';
import itemsData from 'data/dummy';

const sort = (array, order, orderBy) => {
  if (order) {
    if (order === 'asc') {
      const a = fastSort(array).desc(i => i[orderBy]);
      return a;
    }
    return fastSort(array).asc(i => i[orderBy]);
  }
  return array;
};

const baseFilters = filters => item => Object.keys(filters).every(key => item[key] === filters[key]);

export default function handler(req, res) {
  const { page, limit, order, orderBy } = req.query;
  const parsedPage = parseInt(page, 10);
  const parsedLimit = parseInt(limit, 10);
  const filters = req.body;
  const getFiltered = baseFilters(filters);
  const filtered = itemsData.filter(getFiltered);
  const items = sort(filtered, order, orderBy)
    .slice(parsedPage * parsedLimit, parsedPage * parsedLimit + parsedLimit);

  res.status(200).json({ items, total: filtered?.length });
}
