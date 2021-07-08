import React, {useEffect,useState} from 'react'
import "./Advertisement.css"
import { ReactComponent as Logo } from '../../logo.svg';
import JobAdvertisementService from '../../services/jobAdvertisementService';
import "../../App.css"



export default function Advertisement() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])
    
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
    })


    return (

        <div className="container">
             {jobAdvertisements.map(jobAdvertisement=>(        
            <div className="box">
            <Logo className="companyimage"/>
                <h4>{jobAdvertisement.job_position}</h4>
                <div className="inf-box-top city"><i class="fas fa-city"></i>{jobAdvertisement.city.city_name}</div>
                <div className="inf-box-top freespace"><i class="fas fa-users"></i>{jobAdvertisement.open_position}</div>
                <div  className="company-name"><p>{jobAdvertisement.employers.companyName}</p></div>
                <p>{jobAdvertisement.job_description}</p>
                <br /> <br />
                <div className="inf-box-bottom favorite"><i class="fas fa-heart"></i>Favorilere ekle</div>
                <div className="inf-box-bottom details"><i class="fas fa-file-alt"></i>Detaylar</div>
                <div className="inf-box-bottom-left date"><i class="fas fa-calendar-week"></i>{jobAdvertisement.applicationDeadline}</div>
                <div className="inf-box-bottom-left money"><i class="fas fa-money-bill-wave"></i>{jobAdvertisement.min_salary} - {jobAdvertisement.max_salary}</div>
            </div>
        
        ))
        }
        </div>

    )
}
