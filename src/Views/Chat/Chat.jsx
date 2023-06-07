import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Chat.scss';
import { postOpenAiDispatch } from '../../redux/middleware/postChatThunk';
import { replyFromChat } from '../../redux/selectors/chatWithAi.selector';
// import { postRequest } from '../../api/postOpenAi';

const Chat = ({ postMessage, replyMessage }) => {
  const [message, setMessage] = useState('');
  //   if (!replyMessage) return null;

  //   const [response, setResponse] = useState(replyMessage);
  //   const responce = replyMessage[0];

  // useEffect(() => {
  //   fetchData();
  // }, []);
  console.log(replyMessage);
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(message);
    console.log(postMessage);
    postMessage(message);
    // const postMessage = await postRequest(message);
    // console.log(postMessage);
    // setResponse(postMessage);
  };

  return (
    <div className="chat row">
      <div className="chat__main col">
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div style={{ color: 'white' }}>{replyMessage}</div>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    replyMessage: replyFromChat(state),
    //   weatherData: state.weatherData,
  };
};
const mapDispatch = {
  postMessage: postOpenAiDispatch,
  // getLocationWeather: getLocationWeatherDispatch,
  // getTime: getTimeDateNow,
  // startLoadPage: loadPage,
  // setMediaSize: mobileSize,
};
export default connect(mapState, mapDispatch)(Chat);
