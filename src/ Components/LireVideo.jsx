import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import "../Styles/Videos_tyle.css";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function LireVideo() {
  const { id } = useParams();

  return (
    <div>
      <div className="navigation">
        <NavBar />
      </div>
      <div className="interface">
        <Sidebar />
      </div>
      <div className="video_lecture">
        <YouTube videoId={id} className="lirevideo" />;
      </div>
    </div>
  );
}

export default LireVideo;
