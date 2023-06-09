import axios from 'axios';

const url = 'http://localhost:4001/';

// export const postRequest = async message => {
//   try {
//     console.log(message);
//     const response = await axios.post(
//       url,
//       { message },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     console.log(response.data.message);
//     return response.data.message;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const postRequest = message => {
  return new Promise(function (res, rej) {
    setTimeout(() => res('response'), 2000);
  });
};

// const postmessage = await postRequest('Hello');
// console.log(postmessage);
