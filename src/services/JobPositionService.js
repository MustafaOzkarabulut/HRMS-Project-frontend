import axios from "axios";

export default class JobPositionService {
    getPosition(){
        return axios.get("http://localhost:8080/api/job-positions/getall")
        
    }

}