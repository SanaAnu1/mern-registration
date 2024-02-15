import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/educ.png'
 

function Home() {
  return (
    <div className='home w-100  d-flex justify-content-center align-items-center p-5' style={{height:'90vh'}} >
        <div className='container'>
            <div className="row align-items-center">
              <div className="col-lg-5 p-3">
                <h1 style={{fontSize:'45px'}} className='fw-bolder text-light mb-3 '>  
                <i className="fa-solid fa-graduation-cap fa-lg me-3" style={{color: "white"}}></i>
                 Education
                </h1>
                <p style={{textAlign:'justify',color: "white"}}> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veritatis sequi officia quasi esse. Eveniet qui sunt unde omnis aut animi porro sed, ex nesciunt iure fuga, odit sapiente similique.
                </p>
                <Link className='btn btn-warning mt-3' to={'/register'} style={{textTransform:' none'}}>Register
                <i className='fa-solid fa-arrow-right ms-2'></i>
                </Link>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-6">
                <img className='img-fluid' src={img} alt="" /></div>  
            </div>
        </div>
    </div>
  )
}

export default Home