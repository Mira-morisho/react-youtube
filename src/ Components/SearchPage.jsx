import React from "react";
import Sidebar from "./Sidebar";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
const SearchPage = () => {
  const { searchWord } = useParams();
  const [videoFound, setVideoFound] = useState([]);
  const key = "AIzaSyAjYZj_Ga7caIIP_HlQ3Qi5HmgPTG1LGVI";
  const fectData = () => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=60&type=video&q=${searchWord}&safeSearch=none&key=${key}`
      )
      .then((response) => {
        setVideoFound(response.data.items);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fectData();
  }, []);
  return (
    <div>
      <div className="navigation">
        <NavBar />
      </div>
      <div className="interface">
        <Sidebar />
      </div>
      <div className="grid_sidebar_searchbar">
        <div className="main_side">
          <div className="image__preview image__container">
            {videoFound.map(
              (item, id) => (
                /*  {
                        const videoId = item.id.videoId
                        return  */
                <Link
                  className="video__link__style"
                  to={`/video/${item.id.videoId}`}
                  key={id}
                >
                  <div className="images">
                    <img
                      src={item.snippet.thumbnails.medium.url}
                      alt="mon image"
                    />
                    <p>{item.snippet.title}</p>
                  </div>
                </Link>
              )
              /* } */
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
