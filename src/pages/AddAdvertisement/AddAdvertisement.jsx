import React, { useState } from "react";
import { Form, Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { FormField } from "semantic-ui-react";

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
    jobDescription: Yup.string().required(""),
    minSalary: Yup.number(),
    maxSalary: Yup.number(),
    applicationDeadline: Yup.date(),
    city: Yup.string().required("Şehir boş bırakılamaz").oneOf([]),
    openPosition: Yup.number(),
    jobTypes: Yup.string().required("İş türü boş bırakılamaz"),
    typeOfWork: Yup.string(),
  });

  return (
    <div className="form">
      <Formik initialValues={initialValues} validationSchema={schema}>
        <Form>
        <FormField>  
            <Field name="jobPosition" placeholder="İş Pozisyonu Adı"></Field>  
          </FormField>
          <FormField>
            <Field name="jobDescription" placeholder="İş İlanı Açıklaması"></Field>  
          </FormField>
        </Form>
      </Formik>
    </div>
  );
}
