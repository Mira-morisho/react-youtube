import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import images from "../Assets/tube.png";

function Videos() {
  const [video, setVideo] = useState([]);
  const accessToken = localStorage.getItem("item");
  console.log(accessToken);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&key=AIzaSyB-_y9M1f5YNneWKjRHe20bcFjym93tS38",
      {
        method: "GET",
        headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideo(data.items);
      });
  }, []);
  console.log(video);
  return (
    <div className="videos">
      {video &&
        video.map((data, index) => {
          return (
            <Link className="link" to={`/video/${data.id}`} key={index}>
              {" "}
              <div className="images">
                <img
                  className="img"
                  src={data.snippet.thumbnails.medium.url}
                  alt="mon image"
                />
                <p>{data.snippet.localized.title}</p>
                <p>{data.snippet.channelTitle}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Videos;
