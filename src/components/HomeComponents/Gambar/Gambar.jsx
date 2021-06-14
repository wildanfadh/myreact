import React from "react";

// style
import "bootstrap";
import "./Gambar.css";

const Gambar = (props) => {
  return (
    <div>
      <img src={props.gambar} alt={props.alt} className="gambar" />
    </div>
  );
};

export default Gambar;
