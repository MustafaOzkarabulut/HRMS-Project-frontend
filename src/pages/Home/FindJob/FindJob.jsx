import React from "react";
import "./FindJob.css";
import { IconContext } from "react-icons";
import {BsCalculatorFill } from 'react-icons/bs';
import { FaUserNurse} from 'react-icons/fa';
import { MdOutlineSportsMotorsports, MdOutlineEngineering } from 'react-icons/md';
import { IoRestaurantOutline } from 'react-icons/io5';

export default function FindJob() {
  return (
    <div className="container">
    <div className="find-container">  
    <IconContext.Provider value={{color:"#9e9e9e", size:"75"}}>
      <div className="inf-box"><MdOutlineEngineering/><p>Mühendis</p><br /><span>7453 ilan</span></div>
      <div className="inf-box"><FaUserNurse/><p>Hemşire</p><br /><span>7453 ilan</span></div>
      <div className="inf-box"><BsCalculatorFill/><p>Muhasebe</p><br /><span>7453 ilan</span></div>
      <div className="inf-box"><MdOutlineSportsMotorsports size="80" color="#9e9e9e"/><p>Kurye</p><br /><span>7453 ilan</span></div>
      <div className="inf-box"><IoRestaurantOutline/><p>Aşçı</p><br /><span>7453 ilan</span></div>
      </IconContext.Provider>  
      </div>
    </div>
  );
}
