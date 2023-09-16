import axios from "axios";


export default class JobAdvertisementService {
    postJobAdvertisements(value){
        return axios.get("http://localhost:8080/api/jobadvertisements/add", value)
    }
    
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
    }

    getByJobPosition(jobPosition){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByJobPosition?jobPosition="+ jobPosition)
    }

    getByJobAdvertisementId(advertisementId){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByJobAdvertisementId?jobAdvertisementId="+advertisementId)
    }

    getBycompanyName(jobPosition){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByJobPosition?jobPosition="+ jobPosition)
    }
    
    getBySectorName(sectorName){
        return axios.get("http://localhost:8080/api/jobadvertisements/getBySectorName?sectorName="+ sectorName)
    }
    
    getByisActiveAndCompanyName(companyName){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByisActiveAndCompanyName?companyName="+ companyName)
    }

    postJobAdvertisements(values){
        return axios.post("http://localhost:8080/api/jobadvertisements/add")
    }
}