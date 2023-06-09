export const replyFromChat = state => {
  if (!state || !state.chatWithAi || !state.chatWithAi.replies) return null;
  const arrReplies = state.chatWithAi.replies;
  const lastReplyMessage = arrReplies[arrReplies.length - 1];
  //   console.log(lastReplyMessage);
  return lastReplyMessage;
};

export const questionToChat = state => {
  if (!state || !state.chatWithAi || !state.chatWithAi.questions) return null;
  const arrQuestions = state.chatWithAi.questions;
  const lastQuestionMessage = arrQuestions[arrQuestions.length - 1];
  //   console.log(lastReplyMessage);
  return lastQuestionMessage;
};

export const isPostMessage = state => {
  if (!state || !state.chatWithAi || !state.chatWithAi.questions) return null;
  const arrQuestions = state.chatWithAi.questions;
  const isMessage = arrQuestions.length < 1 ? false : true;
  //   console.log(lastReplyMessage);
  // console.log(isMessage);
  return isMessage;
};

export const arrPostGetMessage = state => {
  if (
    !state ||
    !state.chatWithAi ||
    !state.chatWithAi.questions ||
    state.chatWithAi.questions < 1
  ) {
    console.log('selector null');
    return null;
  }

  const arrQuestions = state.chatWithAi.questions;
  const arrReplies = state.chatWithAi.replies;
  const arrPostGet = arrQuestions.map((message, index) => [
    message,
    arrReplies[index],
  ]);
  console.log('selector arr');
  return arrPostGet;
};
