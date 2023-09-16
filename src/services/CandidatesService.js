import axios from "axios";

export default class CandidatesService {
    getCandidates(){
        return axios.get("http://localhost:8080/api/resume/getall")
    }

    getCandidatesResume(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }

    postCandidates(values){
        return axios.post("http://localhost:8080/api/candidates/add", values)
    }
}
