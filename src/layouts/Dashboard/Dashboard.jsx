import React from "react";
import { Route } from "react-router";
import Advertisement from "../../pages/Advertisement/Advertisement";
import Candidates from "../../pages/Candidates/Candidates";
import AddAdvertisement from "../../pages/AddAdvertisement/AddAdvertisement";
import EmployerDetail from "../../pages/EmployerDetail/EmployerDetail";
import AdvertisementDetail from "../../pages/AdvertisementDetail/AdvertisementDetail";
import Filter from "../Filter/Filter";
import { ToastContainer } from "react-toastify";
import Rightbar from "../../Components/Rightbar";
import SortBy from "../../Components/SortBy";
import Adsbar from "../../Components/Adsbar";


export default function Dashboard() {
  return (
    <div>
      <div className="advert-dash">
        <div className="sidebar">
            <Filter />
        </div>
        <div className="content">
            <div className="sortby-container">
              <SortBy/>
            </div>
            <Route exact path="/Advertisement" component={Advertisement} />
            <Route exact path="/Candidates" component={Candidates} />
        </div>
        <div className="right-bar">
            <Rightbar/>
            <Adsbar/>
        </div>
      </div>
      <Route exact path="/Advertisement/:namee" component={AdvertisementDetail} />
      <Route exact path="/Advertisement/employer/:name" component={EmployerDetail} />
      <Route exact path="/add/Advertisement" component={AddAdvertisement} />
    </div>
  );
}
