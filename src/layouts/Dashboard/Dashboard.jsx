import React from 'react';
import Advertisement from '../../pages/Advertisement/Advertisement';
import Candidates from '../../pages/Candidates/Candidates';
import Filter from '../Filter/Filter';
import "./Dashboard.css";



export default function Dashboard() {
    return (
        <div>
            <Filter/>
            <Advertisement/>
            <Candidates/>
        </div>
    )
}
