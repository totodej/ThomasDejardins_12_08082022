// Fetch data from API about activity

const getActivity = async (id) => {
  const url = "http://localhost:3000/user/";
  return fetch(`${url + id + "/activity"}`)
    .then((response) => response.json())
    .then((response) => {
      return response.data;
    });
};

export default getActivity;
