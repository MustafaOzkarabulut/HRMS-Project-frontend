import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import EmployerService from "../../services/EmployerService";
import "../AdvertisementDetail/AdvertisementDetail.css"
import "../../layouts/Filter/Filter"
import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../logo.svg';
import Sector from "../Sector/Sector";

export default function AdvertisementDetail() {
  let { namee } = useParams();

  let { namesector } = useParams();
  

  const [sector, setSector] = useState([]);
 
  const [jobsAdvertisement, setJobsAdvertisement] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
    .getByJobAdvertisementId(namee)
    .then((result)=>setJobsAdvertisement(result.data?.data));
  }, []);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
    .getBySectorName(namesector)
    .then((result)=>setSector(result.data.data));
  }, [])
  

  

  /*useEffect(() => {
    let jobAdvertisementService = JobAdvertisementService();
    jobAdvertisementService.getBySectorName(sectorName).then((result)=>setSector(result.data.data));
  },[sectorName]);*/
  
  return (
    <div className="topbox">
    <div className="topdash"> 
      <Helmet>
        <title>{namee} | HRMS</title>
        <meta name="description" content="Nested component" />
      </Helmet>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg my-9 advertbox">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-purple-700 text-2xl leading-6 font-medium text-gray-900">
          {jobsAdvertisement.jobPosition?.positionName}  
        </h3>
        <h2 className="mt-2">İlan Bilgisi</h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
        </p>
        
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Pozisyon adı</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {jobsAdvertisement.jobPosition?.positionName} 
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              İş Yeri
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {jobsAdvertisement.employers?.companyName} 
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">İlan Açıklaması</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobsAdvertisement.job_description} 
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Sektör</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobsAdvertisement.employers?.sector?.sectorName} 
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Şehir</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
             {jobsAdvertisement.city?.city_name}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Web adresi</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobsAdvertisement.employers?.webAddress}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
             Minimum - Maksimum Ücret
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              $ {jobsAdvertisement.min_salary} - $ {jobsAdvertisement.max_salary}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Çalışma Türü</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobsAdvertisement.typeOfWork}
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Açık pozisyon sayısı</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobsAdvertisement.open_position} Kişi
            </dd>
          </div>

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Çalışma Yeri</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobsAdvertisement.jobTypes}
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Son başvuru tarihi</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobsAdvertisement.applicationDeadline}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </div>
    <div className='comp-box'>
    <div className="rightbar-head">
        <img src="https://www.mistillo.com/wp-content/uploads/2019/10/logo@2.png"/>
      <h2> </h2>
    </div>
    <div className="rightbar-content">
        
      <Link to={`/employers/${jobsAdvertisement.employers?.companyName}`}>
        <h2>{jobsAdvertisement.employers?.companyName}</h2>
      </Link>
    </div>
    <br />
    <div className='details-compp'>
        <p>Aktif İş İlanı Sayısı : </p>
        <p>Sektör : {jobsAdvertisement.employers?.sector?.sectorName}</p>
        <p></p>
    </div>
    <br />
    <div className="rightbar-login">
      <Link to={`/employers/${jobsAdvertisement.employers?.companyName}`}>
        Firmanın Diğer İlanları
      </Link> 
    </div>
  </div>
    
    </div>
  );
}
