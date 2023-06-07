// Express
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4001;

const configuration = new Configuration({
  // //Work
  // organization: "org-BwaZ1QM1osA9yzqg0uQ9QgDy",
  // apiKey:
  // "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",

  // // //Oleksii dont work
  // organization: "org-Efy1j2bjO1wZ1hGLLPVuYFUV",
  // apiKey:
  // "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",

  // //Mary dont work
  organization: 'org-RJYbTUf6vlD3w2wvEOss99Y0',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
  const { message } = req.body;
  console.log(message);
  // const response = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: message,
  //     max_tokens: 100,
  //     temperature: 0,
  // })

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: message,
      },
    ],
  });

  console.log(response);
  if (response.data.choices[0].message.content) {
    res.json({ message: response.data.choices[0].message.content });
  }
});

app.listen(port, () => {
  console.log('OpenAI app listening');
});

////Work
// organization: "org-BwaZ1QM1osA9yzqg0uQ9QgDy",
// apiKey:
// "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",

////My dont work
// organization: "org-Efy1j2bjO1wZ1hGLLPVuYFUV",
// apiKey:
// "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",
