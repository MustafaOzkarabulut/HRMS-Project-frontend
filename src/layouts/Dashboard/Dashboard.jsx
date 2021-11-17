import React from 'react';
import { Route } from 'react-router';
import Advertisement from '../../pages/Advertisement/Advertisement';
import Candidates from '../../pages/Candidates/Candidates';
import AddAdvertisement from '../../pages/AddAdvertisement/AddAdvertisement';
import EmployerDetail from '../../pages/EmployerDetail/EmployerDetail';
import AdvertisementDetail from '../../pages/AdvertisementDetail/AdvertisementDetail';
import Filter from '../Filter/Filter';
import "./Dashboard.css";



export default function Dashboard() {
    return (
        <div>
            <Filter/>
            <Route exact path="/Advertisement/:namee" component={AdvertisementDetail}/>
            <Route exact path="/Advertisement" component={Advertisement}/>
            <Route exact path="/Advertisement/employer/:name" component={EmployerDetail}/>
            <Route exact path="/Candidates" component={Candidates} />
            <Route exact path="/add/Advertisement" component={AddAdvertisement} />
        </div>

        

    )
}
