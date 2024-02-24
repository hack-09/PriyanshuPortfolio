import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';

function HomeFirstSec() {
    const gradientStyle = {
        background: 'linear-gradient(to right, #000000, #8A2387, #E94057, #F27121)',
        color: 'white',
        height: '110vh' // Optional:
      };
  return (
    <div id="/home" className="d-flex justify-content-between" style={gradientStyle}>
        <div className="justify-content text-center align-self-center w-50 my-5 fw-bold fs-1">
            <p>Hii, My name is </p>
            <strong>Priyanshu</strong>
            <p>and I am a passionate</p>
            <TypeAnimation
                sequence={[
                    'Web Developer',
                    1000,
                    'Coder',
                    1000,
                ]}
                wrapper="span"
                speed={40}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
            <div className="d-flex justify-content-center">
                <a class="btn btn-outline-light m-3 fs-4" href="https://drive.google.com/file/d/1tH7HS54r76x7tXM7tFPBg5kFAO7WhoKT/view?usp=drive_link">Resume</a>
                <a class="btn btn-outline-light m-3 fs-4" href="https://github.com/hack-09">Visit Github</a>
            </div>
        </div>
        <div className="mt-5 pt-5">
            <img src="./img/picture.jpg" className="img-fluid rounded-start-pill border border-light border-5" alt="..."/>
        </div>
    </div>
  )
}

export default HomeFirstSec