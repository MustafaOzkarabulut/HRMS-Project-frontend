import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as Logo } from '../../logo.svg';
import EmployerService from "../../services/EmployerService";
import {Link} from "react-router-dom";
import "../../App.css"

export default function EmployerDetail() {
  let { name } = useParams();
  
  const [employer, setEmployer] = useState({});
  const [employerAds, setEmployerAds] = useState([]);
 

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getByCompanyName(name).then((result)=>setEmployer(result.data.data));
  },[]); 

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getByisActiveAndCompanyName(name).then((result)=>setEmployerAds(result.data.data))
},[name]) 

  return (
    <div>
      <div className="container">
    <div className="bg-white shadow overflow-hidden sm:rounded-lg my-9">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Applicant Information {name} {employer.sector?.sectorName}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application. 
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employer.companyName}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
            Sector
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Tekstil
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employer.email_address}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Web Address
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {employer.webAddress}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employer.phoneNumber}</dd>
          </div>

        </dl>
      </div>
    </div>
    <div className="text-4xl font-bold">İşverenin Diğer İş İlanları</div>
    {employerAds.map(employeradvertisement=>(
      <div className="box shadow" key={employeradvertisement.positionName}>     
        <Logo className="companyimage"/>
                <h4><Link to={`/advertisement/${employeradvertisement.positionName}`}>{employeradvertisement.positionName}</Link></h4>
                <div className="inf-box-top city"><i class="fas fa-city"></i>{employeradvertisement.city.city_name}</div>
                <div className="inf-box-top freespace"><i class="fas fa-users"></i>{employeradvertisement.open_position}</div>
                <div  className="company-name my-9"><p><Link to={`/employers/${employeradvertisement.employers?.companyName}`}>{employeradvertisement.employers.companyName}</Link></p></div>
                
                <p>{employeradvertisement.job_description}</p>
                <br /> <br />
                <div className="inf-box-bottom favorite"><i class="fas fa-heart"></i>Favorilere ekle</div>
                <div className="inf-box-bottom details"><i class="fas fa-file-alt"></i>Detaylar</div>
                <div className="inf-box-bottom-left date"><i class="fas fa-calendar-week"></i>{employeradvertisement.applicationDeadline}</div>
                <div className="inf-box-bottom-left money"><i class="fas fa-money-bill-wave"></i>{employeradvertisement.min_salary} - {employeradvertisement.max_salary}</div>
      </div>
    ))}
    </div>
    </div>




)}
