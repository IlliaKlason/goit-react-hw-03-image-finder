import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '29344035-fb655b45173784dd0e4c03214';

const PixabayAPIRequest = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.data.hits.length === 0) {
    alert('sadasdasd');
    console.log('lol');
  }
  return response.data;
};

export default PixabayAPIRequest;
