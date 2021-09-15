
const fetchItems = async ({page = 0, rowsPerPage = 25, order = null, orderBy = null, filters}) => {
  const response = await fetch(`http://localhost:3000/api/items?page=${page}&limit=${rowsPerPage}&orderBy=${orderBy}&order=${order}`);
  const data = await response.json();
  return data;
}

export default fetchItems;