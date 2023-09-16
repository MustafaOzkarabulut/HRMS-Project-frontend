import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "../App.css"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbar-head">
        <h2>Burda hesabın yok mu?</h2>
      </div>
      <div className="rightbar-content">
        <Link to="/register"><a>Hemen Bize Katıl</a></Link>
      </div>
      <br />
      <div className="hr">
        <hr/>
        <p>Ya da</p>
        <hr />
      </div>
      <br />
      <div className="rightbar-login">
        <a href='/login'>
          Giriş Yap
        </a>
      </div>
    </div>
  )
}
