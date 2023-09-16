import React, {useEffect, useState} from "react";
import "./Overlay.css";
import CityService from "../../../services/CityService"
import JobPositionService from "../../../services/JobPositionService"


export default function Overlay({ clickEvent }) {

  const [cities, setCities] = useState([]);
  const [jobPosition, setJobPosition] = useState([]);

  useEffect(() => {
    let cityService = new CityService()
    cityService.getCity().then(result => setCities(result.data.data))
  
    let jobPositionService = new JobPositionService()
    jobPositionService.getPosition().then(result => setJobPosition(result.data.data))

  },[])

  const [cityIndex, setCityIndex] = useState([])
  const handleChangeCity = (e, { value }) => {
    setCityIndex(value)
  }

  const [jobPositionIndex] = useState([])
  const handChangeJobPosition = (e, {value, checked}) => {
    if(checked){
      jobPositionIndex.push(value)
    }else {
      let index = jobPositionIndex.indexOf(value)
      if(index > -1) {
        jobPositionIndex.splice(index, 1)
      }
    }
  }

  return (
    <div className="container">
    <div className="overlay-container">
      <div className="left_area">
        <p className="isara">
          İş <span className="span1">Ara</span>
        </p>
        <p className="overlaydescription">Hayalindeki iş seni bekliyor.</p>
        <div className="cont">
          <input
            className="searchar"
            type="text"
            placeholder="💼 Aradığın iş ( Örn: Garson )"
            
          />

          <input type="text" placeholder="📍 Şehir seç" />
          <a className="ara" >
            <i class="fas fa-search"></i>Ara
          </a>

          <button onClick={() => clickEvent({ cityId: cityIndex, jobPositionId: jobPositionIndex})}>
            Ara
          </button>

        </div>
      </div>
      <div className="right_area">
        <div className="overlayimg">
          <img src="https://i.hizliresim.com/idwidz7.png  " />
        </div>
        
      </div>
    </div>
    </div>
  );
}
