import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import '../App.css'

function HomeSecondSec() {
    const gradientStyle = {
        background: 'linear-gradient(to right, rgb(0 0 0), rgb(3 99 96), rgb(91 28 89), #0a0a41)',
        color: 'white' // Optional: adjust text color for better contrast
      };
  return (
    <div id="skill" className="d-flex justify-content-between" style={gradientStyle}>
        <div className="my-4 w-50 skillImg">
            <img src="./img/bg2.png" className="img-fluid rounded-end-pill w-75" alt="..."/>
        </div>
        <div className="justify-content text-center align-self-center w-50 my-5 fw-bold skillMain">
            <div className="card m-2 p-4 bg-transparent text-white border border-light skillCard">
                <h2 className="my-3">Programming Languages</h2>
                <div className="container d-flex justify-content-between position-relative left-50" style={{width:"55%"}}>
                    <div className="card m-1 card-img-top"><img src="./img/c++.png" className="card-img-top" alt="C++"/></div>
                    <div className="card m-1 card-img-top"><img src="./img/java.png" className="card-img-top" alt="C++"/></div>
                    <div className="card m-1 card-img-top"><img src="./img/html.png" className="card-img-top" alt="C++"/></div>
                    <div className="card m-1 card-img-top"><img src="./img/css.png" className="card-img-top" alt="C++"/></div>
                </div>
            </div>
            <div className="mt-2 card bg-transparent m-2 p-4 text-white border border-light">
                <h2 className="my-3">Web Development</h2>
                <div className="container d-flex justify-content-between position-relative left-50" style={{width:"55%"}}>
                    <div className="card m-1 card-img-top" card-img-top><img src="./img/react.png" className="card-img-top" alt="C++"/></div>
                    <div className="card m-1 card-img-top" card-img-top><img src="./img/bootstrap.svg" className="card-img-top" alt="C++"/></div>
                    <div className="card m-1 card-img-top" card-img-top><img src="./img/nodejs.png" className="card-img-top" alt="C++"/></div>
                    <div className="card m-1 card-img-top" card-img-top><img src="./img/mongoDB.png" className="card-img-top" alt="C++"/></div>
                </div>
            </div>
            <div className="mt-2 card bg-transparent m-2 p-4 text-white border border-light">
                <h2 className="my-3">Digital Tools</h2>
                <div className="container d-flex justify-content-between position-relative left-50" style={{width:"65%"}}>
                    <div className="card m-1 card-img-top"><img src="./img/vscode.png" className="card-img-top" alt="C++"/></div>
                    <div className="card m-1 card-img-top"><img src="./img/gith.png" className="card-img-top" alt="C++"/></div>
                    <div className="card m-1 card-img-top"><img src="./img/android.png" className="card-img-top" alt="C++"/></div>
                    <div className="card m-1 card-img-top"><img src="./img/msWord.jpg" className="card-img-top" alt="C++"/></div>
                    <div className="card m-1 card-img-top"><img src="./img/msPpt.png" className="card-img-top" alt="C++"/></div>
                </div>
            </div>
            <div className="mt-2 card bg-transparent m-2 p-4 text-white border border-light">
                <h2 className="my-3">Problem Solving</h2>
            </div>
        </div>
    </div>
  )
}

export default HomeSecondSec