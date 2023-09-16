import React, {useEffect, useState} from "react";
import { Form, Field, Formik, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import "../AddAdvertisement/AddAdvertisement.css"
import KodlamaIoTextInput from "../../utilities/ccustomFormControls/KodlamaIoTextInput";
import JobAdvertisementService from "../../services/jobAdvertisementService";


export default function AddAdvertisement() {

  let jobAdvertisementService = new JobAdvertisementService();

  const initialValues = {
    jobPosition: "",
    jobDescription: "",
    minSalary: 0,
    maxSalary: 0,
    applicationDeadline: "",
    city: "",
    openPosition: 1,
    jobTypes: "",
    typeOfWork: "",
  };

  const schema = Yup.object({
    jobPosition: Yup.string().required("İsim Boş Bırakılamaz"),
    jobDescription: Yup.string().required("İş Açıklaması Boş Bırakılamaz"),
    minSalary: Yup.number("Lütfen Sayı Giriniz"),
    maxSalary: Yup.number("Lütfen Sayı Giriniz"),
    applicationDeadline: Yup.date("Lütfen tarih formatına uygun yazınız"),
    city: Yup.string().required("Şehir boş bırakılamaz"),
    openPosition: Yup.number(),
    jobTypes: Yup.string().required("İş türü boş bırakılamaz"),
    typeOfWork: Yup.string(),
  });

  const [jobAdvertisement, setJobAdvertisement] = useState({}); 

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.postJobAdvertisements.then((result)=>setJobAdvertisement(result.data.data));
  },[]); 

  return (
    <div className="do">
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema} 
      onSubmit = {(values)=>{
        console.log(values)
        jobAdvertisementService.postJobAdvertisements(values).then((result) =>setJobAdvertisement(result.data.data));
      }}
      >
        {(formikprops) => (
         
        <Form onSubmit={formikprops.handleSubmit}>
          <KodlamaIoTextInput name="jobPosition" placeholder="İş Pozisyonu Adı"/>
          <KodlamaIoTextInput name="jobDescription" placeholder="İş Açıklaması"/>
          <KodlamaIoTextInput name="minSalary" placeholder="Min Ücret"/>
          <KodlamaIoTextInput name="maxSalary" placeholder="Max Ücret"/>
          <KodlamaIoTextInput name="applicationDeadline" type="date" placeholder="Son Başvuru Tarihi"/>
          <KodlamaIoTextInput name="city" placeholder="Şehir"/>
          <KodlamaIoTextInput name="openPosition" placeholder="Açık Pozisyon Adedi"/>
          <KodlamaIoTextInput name="jobTypes" placeholder="İş Türü"/>
          <KodlamaIoTextInput name="typeOfWork" placeholder="Tam Zamanlı"/>
          <Button color="green" type="submit">Ekle</Button>
        </Form>
       )}
        
        
      </Formik>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  );
}
