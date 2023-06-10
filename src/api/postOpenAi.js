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
    setTimeout(
      () =>
        res(
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptates id impedit facere, fugit assumenda neque maxime repellat nesciunt asperiores rerum minus, itaque accusamus porro error distinctio accusantium possimus natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea veritatis perspiciatis ab assumenda voluptatibus ex vero ullam temporibus, ratione laboriosam, ipsam tempora soluta, exercitationem sequi rerum culpa quisquam nisi.'
        ),
      2000
    );
  });
};

// const postmessage = await postRequest('Hello');
// console.log(postmessage);
