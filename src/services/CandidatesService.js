import axios from "axios";

export default class CandidatesService {
    getCandidates(){
        return axios.get("http://localhost:8080/api/resume/getall")
    }
}