import React from "react";
import "../Filter/Filter.css";
import "../../App.css";

export default function Filter() {
  return (

    <div className="container">
      <div className="filter-box">
        <h1 className="filterh1">Filtreleme</h1>
        <h2>Şehir</h2>
        <input type="checkbox" id="vehicle1" name="vehicle1"/>
        <label for="vehicle1"> İstanbul</label><br></br>
        <input type="checkbox" id="vehicle1" name="vehicle1"/>
        <label for="vehicle1"> Bursa</label><br></br>      
      </div>
    </div>
  );
}
