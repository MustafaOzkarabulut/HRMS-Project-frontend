import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "../App.css"

export default function CompanyBox() {
  return (
    <div className='comp-box'>
    <div className="rightbar-head">
        <img src="https://www.mistillo.com/wp-content/uploads/2019/10/logo@2.png"/>
      <h2>NİKE</h2>
    </div>
    <div className="rightbar-content">
        
      <Link to="/register"><a>Hemen Bize Katıl</a></Link>
    </div>
    <br />
    <div className='details-compp'>
        <p>Aktif İş İlanı Sayısı : </p>
        <p>Sektör : {}</p>
        <p></p>
    </div>
    <br />
    <div className="rightbar-login">
      <a href='/login'>
        Başvur
      </a>
    </div>
  </div>
  )
}
