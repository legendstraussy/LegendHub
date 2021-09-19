import fetch from 'isomorphic-unfetch';

const fetchItems = async ({
  page = 0, rowsPerPage = 25, order = null, orderBy = null,
}) => {
  // const response = await fetch(`http://localhost:3000/api/items?page=${page}&limit=${rowsPerPage}&orderBy=${orderBy}&order=${order}`);
  const response = await fetch(`http://localhost:3000/api/items?page=${page}&limit=${rowsPerPage}&orderBy=${orderBy}&order=${order}`, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(filters),
  });
  const data = await response.json();
  return data;
};

export default fetchItems;
