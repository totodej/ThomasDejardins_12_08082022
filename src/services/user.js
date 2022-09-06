// Fetch data from API about user

const getUser = async (id) => {
  const url = "http://localhost:3000/user/";
  return fetch(`${url + id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => {
      if (response === undefined) {
        return "Error";
      } else {
        return response.data;
      }
    });
};

export default getUser;
