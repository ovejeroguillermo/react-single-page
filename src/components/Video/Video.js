import React from "react";
import "./video.css";
import ReactPlayer from "react-player";
import Zoom from "react-reveal/Zoom";
const Video = () => {
  const data = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=0Gop-eL6Smk",
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },

    {
      id: 2,
      url: "https://www.youtube.com/watch?v=0Gop-eL6Smk",
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },

    {
      id: 3,
      url: "https://www.youtube.com/watch?v=0Gop-eL6Smk",
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },

    {
      id: 4,
      url: "https://www.youtube.com/watch?v=0Gop-eL6Smk",
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },

    {
      id: 5,
      url: "https://www.youtube.com/watch?v=0Gop-eL6Smk",
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },

    {
      id: 6,
      url: "https://www.youtube.com/watch?v=0Gop-eL6Smk",
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },
  ];

  return (
    <div className="container video" id="video">
      <div className="section_title">
        <h5>Video</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <Zoom>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="video-details" key={index}>
                <ReactPlayer
                  url={item.url}
                  loop={true}
                  controls
                  playing={false}
                  width="auto"
                  height="250px"
                />
                <div className="video-content">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Video;
