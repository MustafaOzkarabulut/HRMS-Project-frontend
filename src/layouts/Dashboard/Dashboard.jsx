import React from 'react';
import { Route } from 'react-router';
import Advertisement from '../../pages/Advertisement/Advertisement';
import Candidates from '../../pages/Candidates/Candidates';
import AddAdvertisement from '../../pages/AddAdvertisement/AddAdvertisement';
import Filter from '../Filter/Filter';
import "./Dashboard.css";



export default function Dashboard() {
    return (
        <div>
            <Filter/>

            <Route exact path="/Advertisement" component={Advertisement}/>
            <Route path="/Candidates" component={Candidates} />
            <Route path="/AddAdvertisement" component={AddAdvertisement} />
        </div>
    )
}
