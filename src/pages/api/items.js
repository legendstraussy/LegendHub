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

export default function handler(req, res) {
  const { page, limit, order, orderBy } = req.query
  const parsedPage = parseInt(page);
  const parsedLimit = parseInt(limit);
  const items = sort(itemsData, order, orderBy)
    .slice(parsedPage * parsedLimit, parsedPage * parsedLimit + parsedLimit)

  res.status(200).json({ items, total: itemsData?.length });
}
