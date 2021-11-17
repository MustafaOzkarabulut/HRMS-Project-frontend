import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PaperClipIcon } from "@heroicons/react/solid";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function AdvertisementDetail() {
  let { namee } = useParams();

  const [jobAdvertisement, setJobAdvertisement] = useState({});
 
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getByJobPosition(namee).then((result)=>setJobAdvertisement(result.data.data));
  },[]);






  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg my-9">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          İlan Bilgisi
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Pozisyon adı</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {jobAdvertisement.jobPosition} {jobAdvertisement.id} 
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              İş Yeri
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobAdvertisement.jobTypes} {jobAdvertisement.companyName} 
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Çalışma Türü</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobAdvertisement.typeOfWork}
            </dd>
          </div>

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Web adresi</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            İş verenin web adresi buraya gelicek
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
             Minimum - Maksimum Ücret
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              $ {jobAdvertisement.min_salary} - $ {jobAdvertisement.max_salary}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobAdvertisement.job_description}
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Açık pozisyon sayısı</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobAdvertisement.open_position} Kişi
            </dd>
          </div>

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Son başvuru tarihi</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {jobAdvertisement.applicationDeadline}
            </dd>
          </div>


          

        </dl>
      </div>
    </div>
    
  );
}
