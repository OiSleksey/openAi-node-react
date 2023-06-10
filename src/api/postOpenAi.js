import axios from 'axios';

const url = 'http://localhost:4001/';

//With server

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
    console.log(response.data.message);
    return response.data.message;
  } catch (error) {
    console.error(error);
    return 'Sorry. An error occurred on the server. We are working on it. Please try again later.';
  }
};

//Without server

// export const postRequest = message => {
//   return new Promise(function (res, rej) {
//     const random = Math.random();
//     if (random <= 0.5)
//       setTimeout(
//         () =>
//           res(
//             'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptates id impedit facere, fugit assumenda neque maxime repellat nesciunt asperiores rerum minus, itaque accusamus porro error distinctio accusantium possimus natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea veritatis perspiciatis ab assumenda voluptatibus ex vero ullam temporibus, ratione laboriosam, ipsam tempora soluta, exercitationem sequi rerum culpa quisquam nisi.'
//           ),
//         2000
//       );
//     setTimeout(
//       () =>
//         rej(
//           'Sorry. An error occurred on the server. We are working on it. Please try again later.'
//         ),
//       2000
//     );
//   });
// };
