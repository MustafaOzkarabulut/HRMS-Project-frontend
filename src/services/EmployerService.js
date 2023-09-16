import axios from "axios";


export default class EmployerService {
    getByCompanyName(companyName){
        return axios.get("http://localhost:8080/api/employers/getByCompanyName?companyName="+ companyName)
    }                     

    getByJobPosition(jobPosition){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByJobPosition?jobPosition="+ jobPosition)
    }

    getByisActiveAndCompanyName(companyName){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByisActiveAndCompanyName?companyName="+ companyName)
    }
}