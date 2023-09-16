import React from "react";
import "../SignUp/SignUp.css"
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import CandidatesService from "../../services/CandidatesService";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function SignUp() {
	
	 let candidatesService = new CandidatesService();
  	const candidateRegisterSchema = Yup.object().shape({
    birthday: Yup.date().required("Doğum Tarihi zorunludur"),
    email_address: Yup.string().required("Email alanı zorunludur").email("Geçerli bir email değil"),
    name: Yup.string().required("İsim zorunludur"),
    surname: Yup.string().required("Soy isim zorunludur"),
    identification_number: Yup.string().required("Kimlik numarası zorunludur").length(11,"Kımlık numarası hatalı").matches(/^[0-9]+$/, "Sadece rakam girilmelidir"),
    password: Yup.string().required("Şifre zorunludur").min(8,"Şifre en az 8 karakter uzunlugunda olmalıdır"),
    repassword: Yup.string().oneOf([Yup.ref("password"),null], "Şifreler eşleşmiyor")
  });

  const history = useHistory();

  const formik= useFormik({
    initialValues: {
      birthday:"",
      email_address:"",
      name:"",
      surname:"",
      identification_number:"",
      password:"",
      repassword:"",
    },
    validationSchema: candidateRegisterSchema,
    onSubmit:(values) => {
      candidatesService.postCandidates(values).then((result) => {
        toast.success(`Kayıt Başarılı`)
      })
      .catch((result) => {
        toast.error(`Kayıt Başarısız !`)
      })      
    }
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName,value);
  }

  return (
    <div>
      <div>

      <Form size="large" onSubmit={formik.handleSubmit}>
        <Segment stacked>
          <Grid stackable>
            <Grid.Column width={8}>
            <div style={{marginTop:"1em", width:"25%"}}>
              <label><b>İsim</b></label>
              
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="İsim"
                type="text"
                value={formik.values.name}
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.errors.name && formik.touched.name && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.name}
                  </div>
                )
              }
              </div>
              <div style={{marginTop:"1em", width:"25%"}}>
              <label><b>Soy İsim</b></label>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Soy isim"
                type="text"
                value={formik.values.surname}
                name="surname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.surname && formik.touched.surname && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.surname}
                  </div>
                )}
              </div>
              <div style={{marginTop:"1em", width:"25%"}}>
              <label><b>Kimlik Numarası</b></label>
              <Form.Input
                fluid
                icon="id card"
                iconPosition="left"
                placeholder="Kimlik numarası"
                type="text"
                value={formik.values.identification_number}
                name="identification_number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.identification_number && formik.touched.identification_number && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.identification_number}
                  </div>
                )}
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Doğum Tarihi</b></label>
              <Form.Input
                fluid
                icon="calendar times"
                iconPosition="left"
                placeholder="Dogum tarihi"
                type="date"
                error={Boolean(formik.errors.birthday)}
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "birthday")
                }
                value={formik.values.birthday}
                onBlur={formik.handleBlur}
                name="birthday"
              />
              {formik.errors.birthday && formik.touched.birthday && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.birthday}
                  </div>
                )}
              </div>
            </Grid.Column>

            <Grid.Column width={8}>
              <div style={{marginTop:"1em"}}>
            <label><b>Email</b></label>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail adresi"
                type="email"
                value={formik.values.email_address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email_address"
              />
              {formik.errors.email_address && formik.touched.email_address && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.email_address}
                  </div>
                )}
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Şifre</b></label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Şifre"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
              />
               {formik.errors.password && formik.touched.password && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div style={{marginTop:"1em"}}>
              <label><b>Şifre Tekrar</b></label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Şifre tekrar"
                type="password"
                value={formik.values.repassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="repassword"
              />
              {formik.errors.repassword && formik.touched.repassword && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.repassword}
                  </div>
                )}
              </div>
            </Grid.Column>
          </Grid>

            <br/>
          <Button className="registerbutton" color="teal" fluid size="large" type="submit">
            Kayıt Ol
          </Button>
        </Segment>
      </Form>
      <Message info><Link to={"/registerEmployer"}><b>İşveren olarak kaydolmak için buraya tıkla</b></Link></Message>
      </div>
    </div>

  )
}
