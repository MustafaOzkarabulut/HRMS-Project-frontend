import React from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import "../AddAdvertisement/AddAdvertisement.css"
import KodlamaIoTextInput from "../../utilities/ccustomFormControls/KodlamaIoTextInput";


export default function AddAdvertisement() {
  const initialValues = {
    jobPosition: "",
    jobDescription: "",
    minSalary: 0,
    maxSalary: 0,
    applicationDeadline: Date,
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
    applicationDeadline: Yup.date(),
    city: Yup.string().required("Şehir boş bırakılamaz").oneOf(["İstanbul"]),
    openPosition: Yup.number(),
    jobTypes: Yup.string().required("İş türü boş bırakılamaz"),
    typeOfWork: Yup.string(),
  });

  return (
    <div className="do">
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema} 
      onSubmit = {(values)=>{
        console.log(values)
      }}
      >
        <Form>
          <KodlamaIoTextInput name="jobPosition" placeholder="İş Pozisyonu Adı"/>
          <KodlamaIoTextInput name="jobDescription" placeholder="İş Açıklaması"/>
          <KodlamaIoTextInput name="minSalary" placeholder="Min Ücret"/>
          <KodlamaIoTextInput name="maxSalary" placeholder="Max Ücret"/>
          <KodlamaIoTextInput name="applicationDeadline" placeholder="Son Başvuru Tarihi"/>
          <KodlamaIoTextInput name="city" placeholder="Şehir"/>
          <KodlamaIoTextInput name="openPosition" placeholder="Açık Pozisyon Adedi"/>
          <KodlamaIoTextInput name="jobTypes" placeholder="İş Türü"/>
          <KodlamaIoTextInput name="typeOfWork" placeholder="Tam Zamanlı"/>
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
      </div>
  );
}
