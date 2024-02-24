import React from 'react'

function ContactSec() {
    const gradientStyle = {
        background: 'rgb(11 22 38)'
    };

    const size={
        width:"45px",
        height:"45px",
    }
  return (
    <div className="" style={gradientStyle}>
        <div className="d-flex justify-content-center p-4" >
            <a href="https://github.com/hack-09" className="p-2"><img src="./img/gith.png" class="img-thumbnail" alt="..." style={size}/></a>
            <a href="https://www.linkedin.com/in/priyanshukumar9/" className="p-2"><img src="./img/linkedin.png" class="img-thumbnail" alt="..." style={size}/></a>
            <a href="https://www.instagram.com/priyanshu_kumar_rai_/" className="p-2"><img src="./img/insta.png" class="img-thumbnail" alt="..." style={size}/></a>
            <a href="mailto:priyanshukumar9780@gmail.com" className="p-2"><img src="./img/mail.png" class="img-thumbnail" alt="..." style={size}/></a>
            <a href="tel:+7986025569" className="p-2"><img src="./img/phone.png" class="img-thumbnail" alt="..." style={size}/></a>
        </div>
        <div className="container-fluid  p-3 text-center">
            <p>Copyright © www.priyanshuportolio.com | All rights reserved</p>
        </div>
    </div>
  )
}

export default ContactSec