export const replyFromChat = state => {
  if (!state || !state.chatWithAi || !state.chatWithAi.replies) return null;
  const arrReplies = state.chatWithAi.replies;
  const lastReplyMessage = arrReplies[arrReplies.length - 1];
  //   console.log(lastReplyMessage);
  return lastReplyMessage;
};
