import axios from "axios";


export default class JobAdvertisementService {
    addJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
    }

    getByJobPosition(jobPosition){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByJobPosition?jobPosition="+ jobPosition)
    }

    getBycompanyName(jobPosition){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByJobPosition?jobPosition="+ jobPosition)
    }

    postJobAdvertisements(job){
        return axios.post("http://localhost:8080/api/jobadvertisements/add", job)
    }
}