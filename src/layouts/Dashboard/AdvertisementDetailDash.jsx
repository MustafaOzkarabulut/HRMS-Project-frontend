import React from 'react'
import Detail from '../../Components/Detail'
import { Route } from "react-router";
import "../../App.css"
import Rightbar from '../../Components/Rightbar'
import AdvertisementDetail from '../../pages/AdvertisementDetail/AdvertisementDetail'
import CompanyBox from '../../Components/CompanyBox'

export default function () {
  return (
    <div className='advert-detail-dash'>
        <div className="left-dash">
        <Route exact path="/Advertisement/:namee" component={AdvertisementDetail} />
        </div>
        <div className="right-dash">
          
        </div>
    </div>
  )
}
