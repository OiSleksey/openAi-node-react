import axios from 'axios';

const url = 'http://localhost:4001/';

export const postRequest = async message => {
  try {
    console.log(message);
    const response = await axios.post(
      url,
      { message },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.message;
  } catch (error) {
    console.error(error);
  }
};
