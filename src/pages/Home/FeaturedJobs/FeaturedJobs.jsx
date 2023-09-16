import React from "react";
import "./FeaturedJobs.css";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import "../../../App.css";
import "../../Advertisement/Advertisement.css";
import { Link } from "react-router-dom";

export default function FeaturedJobs() {
  return (
    <div className="featured_jobs">
      <h2 className="feat">Featured Jobs</h2>
      <div className="container">
      
      <div className="featured_container">
        <div className="box_feat shadow">
          <UilBriefcaseAlt className="companyimage" />
          <h4>Endüstri Mühendisi</h4>
          <div className="inf-box-top city">
            <i class="fas fa-city"></i>İstanbul
          </div>
          <div className="inf-box-top freespace">
            <i class="fas fa-users"></i>4
          </div>
          <div className="company-name my-9">
            <p>Mıstillo Armatür</p>
          </div>
          <p>
            Alaanında uzman üniversiteyi bitirmiş endüstri Mühendisleri
            arıyoruz.
          </p>
          <br /> <br />
          <div className="inf-box-bottom favorite">
            <i class="fas fa-heart"></i>
          </div>
          <div className="inf-box-bottom details">
            <i class="fas fa-file-alt"></i>Detaylar
          </div>
          <div className="inf-box-bottom-left date">
            <i class="fas fa-calendar-week"></i>12-01-2022
          </div>
          <div className="inf-box-bottom-left money">
            <i class="fas fa-money-bill-wave"></i>4850 - 8950
          </div>
        </div>
        <div className="box_feat shadow">
          <UilBriefcaseAlt className="companyimage" />
          <h4>3D İllustrator</h4>
          <div className="inf-box-top city">
            <i class="fas fa-city"></i>İstanbul
          </div>
          <div className="inf-box-top freespace">
            <i class="fas fa-users"></i>1
          </div>
          <div className="company-name my-9">
            <p>EMA Ticaret</p>
          </div>
          <p>
            Alaanında uzman blender kullanabilen 3D İllustratorleri arıyoruz.
          </p>
          <br /> <br />
          <div className="inf-box-bottom favorite">
            <i class="fas fa-heart"></i>
          </div>
          <div className="inf-box-bottom details">
            <i class="fas fa-file-alt"></i>Detaylar
          </div>
          <div className="inf-box-bottom-left date">
            <i class="fas fa-calendar-week"></i>12-01-2022
          </div>
          <div className="inf-box-bottom-left money">
            <i class="fas fa-money-bill-wave"></i>4850 - 8950
          </div>
        </div>
      </div>
      <div className="all_browse_button">
      <Link
                to={`/advertisement`}
              >
                
            <a href="/">Hepsine Göz At</a>  </Link> 
      </div>
      </div>
    </div>
  );
}
