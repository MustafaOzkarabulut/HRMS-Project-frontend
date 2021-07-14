import React from "react";
import "./Navi.css";


export default function Navi() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h1>HRMS</h1>
        </div>
        <div className="buttons">
          <button className="btn signin">Giriş Yap</button>
          <button className="btn signup">Kaydol</button>
        </div>
        </div> 
    </div>
  );
}
