import React from 'react'
import "../App.css"

export default function () {
  return (
    <div className='rightbar'>
      <div className="rightbar-head">
        <h2>Burda hesabın yok mu?</h2>
      </div>
      <div className="rightbar-content">
        <a href="">Hemen Bize Katıl</a>
      </div>
      <br />
      <div className="hr">
        <hr/>
        <p>Ya da</p>
        <hr />
      </div>
      <br />
      <div className="rightbar-login">
        <a href="">
          Giriş Yap
        </a>
      </div>
    </div>
  )
}
