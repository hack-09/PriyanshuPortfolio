import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import '../App.css'

function HomeSecondSec() {
    const gradientStyle = {
        background: 'linear-gradient(to right, rgb(0 0 0), rgb(3 99 96), rgb(91 28 89), #0a0a41)',
        color: 'white' // Optional: adjust text color for better contrast
      };

      const source = 'https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/';
  return (
    <div id="skill" className="d-flex justify-content-between" style={gradientStyle}>
        <div className="my-4 w-50 skillImg">
            <img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/bg2.png" className="img-fluid rounded-end-pill w-75" alt="..."/>
        </div>
        <div className="justify-content text-center align-self-center w-50 my-5 fw-bold skillMain">
            <div className="card m-2 p-4 bg-transparent text-white border border-light skillCard">
                <h2 className="my-3">Programming Languages</h2>
                <div className="container d-flex justify-content-between position-relative left-50" style={{width:"55%"}}>
                    <div className="card m-1 card-img-top"><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/c%2B%2B.png" className="card-img-top" alt="C++"/></div>
                    <div className="card m-1 card-img-top"><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/java.png" className="card-img-top" alt="java"/></div>
                    <div className="card m-1 card-img-top"><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/html.png" className="card-img-top" alt="html"/></div>
                    <div className="card m-1 card-img-top"><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/css.png" className="card-img-top" alt="css"/></div>
                </div>
            </div>
            <div className="mt-2 card bg-transparent m-2 p-4 text-white border border-light">
                <h2 className="my-3">Web Development</h2>
                <div className="container d-flex justify-content-between position-relative left-50" style={{width:"55%"}}>
                    <div className="card m-1 card-img-top" card-img-top><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/reactjs.png" className="card-img-top" alt="react"/></div>
                    <div className="card m-1 card-img-top" card-img-top><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/bootstrap.svg" className="card-img-top" alt="bootstrap"/></div>
                    <div className="card m-1 card-img-top" card-img-top><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/nodejs.png" className="card-img-top" alt="Nodejs"/></div>
                    <div className="card m-1 card-img-top" card-img-top><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/mongoDB.png" className="card-img-top" alt="mongoDB"/></div>
                </div>
            </div>
            <div className="mt-2 card bg-transparent m-2 p-4 text-white border border-light">
                <h2 className="my-3">Digital Tools</h2>
                <div className="container d-flex justify-content-between position-relative left-50" style={{width:"65%"}}>
                    <div className="card m-1 card-img-top"><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/vscode.png" className="card-img-top" alt="vscode"/></div>
                    <div className="card m-1 card-img-top"><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/gith.png" className="card-img-top" alt="github"/></div>
                    <div className="card m-1 card-img-top"><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/android.png" className="card-img-top" alt="android"/></div>
                    <div className="card m-1 card-img-top"><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/msWord.jpg" className="card-img-top" alt="ms-word"/></div>
                    <div className="card m-1 card-img-top"><img src="https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/img/msPpt.png" className="card-img-top" alt="ms-ppt"/></div>
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