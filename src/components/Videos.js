import React from "react";
import ReactPlayer from "react-player/youtube";

const u1 = "https://www.youtube.com/watch?v=-_VhU5rqyko";
const Videos = () => {
 
  return (
    <div className="vd-cont">
      <div className="containers">
        <div className="videos-cont">
          <MyVideo url={u1}/>
        </div>
        <div className="videos-cont">
          <MyVideo url={u1}/>
        </div>
      </div>
    </div>
  );
};

const MyVideo = () => {
  return <ReactPlayer url={u1} width={400}
  height={200} marginTop={4} value={{className:'video'}}/>;
};

export default Videos;
