import React, {useState} from 'react';
import AgoraUIKit from 'agora-react-uikit';
// const APP_ID = "417e32d68c42461181ba3eb1b4f0213d"
// const TOKEN = '007eJxTYDAL8bmU8DNUW22e/PN9jH9OWXNmvNX+cz90SWJZW+31B5cVGEwMzVONjVLMLJJNjEzMDA0tDJMSjVOTDJNM0gyMDI1TFt7ySGkIZGSYZ13DwsgAgSA+B4NzYk5yaU5pMQMDAAQRIcM='
// const CHANNEL = "Calculus";

const VideoRoom= () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "417e32d68c42461181ba3eb1b4f0213d",
    channel: "Calculus", // your agora channel
    token: '007eJxTYKi7s3T29r7lbzdZ/H/9ovgd64awby2HXqY/ld0xS8hPxcxFgcHE0DzV2CjFzCLZxMjEzNDQwjAp0Tg1yTDJJM3AyNA4hfN+SEpDICPD29OrGBkZIBDE52BwTsxJLs0pLWZgAADbyCPz' // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{display: 'flex', width: '25rem', height: '25rem', borderRadius:'2rem',marginLeft:"2rem",marginTop:"2rem"}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks}  />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default VideoRoom;

