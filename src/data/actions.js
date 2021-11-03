<<<<<<< HEAD
import fetch from 'isomorphic-unfetch';

const fetchItems = async ({
  page = 0, rowsPerPage = 25, order = null, orderBy = null,
}) => {
  const response = await fetch(`/api/items?page=${page}&limit=${rowsPerPage}&orderBy=${orderBy}&order=${order}`, {
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
=======
import fetch from 'isomorphic-unfetch';

// TODO convert this into a hook
const fetchItems = async ({
  page = 0, rowsPerPage = 25, order = null, orderBy = null,
}) => {
  const response = await fetch(`/api/items?page=${page}&limit=${rowsPerPage}&orderBy=${orderBy}&order=${order}`, {
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
>>>>>>> 7c9885a2546f3028b29b00d6c2954d49f91479b1
