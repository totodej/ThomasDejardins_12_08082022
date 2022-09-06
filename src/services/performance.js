// Fetch data from API about performance

const getPerformance = async (id) => {
  const url = "http://localhost:3000/user/";
  return fetch(`${url + id + "/performance"}`)
    .then((response) => response.json())
    .then((response) => {
      return response.data;
    });
};

export default getPerformance;
