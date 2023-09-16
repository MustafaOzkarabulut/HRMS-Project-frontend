import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../logo.svg';

export default function Sector() {

  let { namesector } = useParams();

  const [sector, setSector] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getBySectorName(namesector).then((result)=>setSector(result.data.data));
  },[namesector])

  return (
    <div> 
    <div className="text-4xl font-bold">{namesector} İş İlanları</div>
    {sector.map(sectoradvertisement=>(
      <div className="box shadow" key={sectoradvertisement.jobPosition}>     
        <Logo className="companyimage"/>
                <h4><Link to={`/advertisement/${sectoradvertisement.jobPosition}`}>{sectoradvertisement.jobPosition}</Link></h4>
                <div className="inf-box-top city"><i class="fas fa-city"></i>{sectoradvertisement.city.city_name}</div>
                <div className="inf-box-top freespace"><i class="fas fa-users"></i>{sectoradvertisement.open_position}</div>
                <div  className="company-name my-9"><p><Link to={`/employers/${sectoradvertisement.employers?.companyName}`}>{sectoradvertisement.employers.companyName}</Link></p></div>
                
                <p>{sectoradvertisement.job_description}</p>
                <br /> <br />
                <div className="inf-box-bottom favorite"><i class="fas fa-heart"></i>Favorilere ekle</div>
                <div className="inf-box-bottom details"><i class="fas fa-file-alt"></i>Detaylar</div>
                <div className="inf-box-bottom-left date"><i class="fas fa-calendar-week"></i>{sectoradvertisement.applicationDeadline}</div>
                <div className="inf-box-bottom-left money"><i class="fas fa-money-bill-wave"></i>{sectoradvertisement.min_salary} - {sectoradvertisement.max_salary}</div>
      </div>
    ))}
    </div>
  );
}
