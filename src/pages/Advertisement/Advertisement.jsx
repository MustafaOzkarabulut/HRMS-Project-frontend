import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Advertisement.css";
import { ReactComponent as Logo } from "../../logo.svg";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import "../../App.css";
import EmployerService from "../../services/EmployerService";
import { Helmet } from "react-helmet";
import { UilMap } from "@iconscout/react-unicons";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export default function Advertisement() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getByCompanyName()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>İş İlanları|HRMS</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      {jobAdvertisements.map((jobAdvertisement) => (
        <div className="box shadow" key={jobAdvertisement.id}>
          <Logo className="companyimage" />
          <h4>
            <Link to={`/advertisement/${jobAdvertisement.jobAdvertisementId}`}>
              {jobAdvertisement.jobPosition?.positionName}
            </Link>
          </h4>
          <div className="inf-box-top city">
            <i class="fas fa-city"></i>
            {jobAdvertisement.city.city_name}
          </div>
          <div className="inf-box-top freespace">
            <i class="fas fa-users"></i>
            {jobAdvertisement.open_position}
          </div>
          <div className="company-name my-9">
            <p>
              <Link
                to={`/employers/${jobAdvertisement.employers?.companyName}`}
              >
                {jobAdvertisement.employers?.companyName}
              </Link>
            </p>
          </div>
          <p>{jobAdvertisement.job_description}</p>
          <br /> <br />
          <div className="inf-box-bottom favorite">
            <i class="fas fa-heart"></i>Favorilere ekle
          </div>
          <div className="inf-box-bottom details">
            <Link to={`/advertisement/${jobAdvertisement.jobPosition?.positionName}`}>
              <i class="fas fa-file-alt"></i>Detaylar
            </Link>
          </div>
          <div className="inf-box-bottom-left date">
            <i class="fas fa-calendar-week"></i>
            {jobAdvertisement.applicationDeadline}
          </div>
          <div className="inf-box-bottom-left money">
            <i class="fas fa-money-bill-wave"></i>
            {jobAdvertisement.min_salary} - {jobAdvertisement.max_salary}
          </div>
        </div>
      ))}
      <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6 mt-5 rounded-3xl" >
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
          <span className="font-medium">97</span> Sonuçtan <span className="font-medium">10</span> tanesi {' '}
             gösteriliyor
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              8
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              9
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
}
