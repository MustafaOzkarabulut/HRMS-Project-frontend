import React, {useEffect,useState} from 'react'
import {  } from "react-router-dom";
import { ReactComponent as Logo } from '../../logo.svg';
import '../Candidates/Candidates.css';
import CandidatesService from '../../services/CandidatesService';
import '../../App.css';

export default function Candidates() {
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidatesService = new CandidatesService()
        candidatesService.getCandidates().then(result=>setCandidates(result.data.data))
    })

    return (
        <div  className="container">
            {candidates.map(candidates=>( 
            <div className="candidatesbox">
                <Logo className="companyimage"/>
                <h4>{candidates.education.sectionName}</h4>
                <div className="inf-box-top city"><i class="fas fa-university"></i>{candidates.education.schoolName}</div>
                <div className="inf-box-top freespace"><i class="fas fa-language"></i>{candidates.language.languageName}</div>
                <div  className="company-name"><p>{candidates.candidates.name} {candidates.candidates.surname}</p></div>
                <p>{candidates.description}</p>
                <br /> <br />
                <div className="inf-box-bottom favorite"><i class="fas fa-heart"></i>Favorilere ekle</div>
                <div className="inf-box-bottom details"><i class="fas fa-file-alt"></i>Detaylar</div>
                <div className="inf-box-bottom-left github"><i class="fab fa-github"></i>Github</div>
                <div className="inf-box-bottom-left linkedin"><i class="fab fa-linkedin"></i>Linkdin</div>
            </div>
        
        ))
        }
        </div>
    )
}
