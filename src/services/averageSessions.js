// Fetch data from API about average sessions

const getAverageSessions = async (id) => {
  const url = "http://localhost:3000/user/";
  return fetch(`${url + id + "/average-sessions"}`)
    .then((response) => response.json())
    .then((response) => {
      return response.data;
    });
};

export default getAverageSessions;
