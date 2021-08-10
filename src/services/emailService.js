const baseUrl = "https://dx-backend.herokuapp.com/" // TODO: backend url from env variable

const addEmail = async (email) => {
  const response = await fetch(`${baseUrl}/emails/`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });

  if (response.status !== 200) {
    throw response;
  }
  return response.json();
};

export default {
  addEmail
}