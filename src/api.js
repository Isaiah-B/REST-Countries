import axios from 'axios';

export const getAll = async () => {
  const res = await axios.get('https://restcountries.com/v3.1/all');
  console.log(res.data);
  return res.data;
};

export const getBorder = async (code) => {
  const res = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${code}`);
  return res.data[0].name.common;
};
