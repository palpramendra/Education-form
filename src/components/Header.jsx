import React from 'react'
import Home from '../pages/Home'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <section className='top'>
                <ul>
                    <li><i className="bi bi-geo-alt-fill"></i> 050-Kathmandu,Nepal</li>
                    <li><i className="bi bi-telephone"></i> +977-556778345</li>
                    <li><i className="bi bi-envelope"></i> demo@example.com</li>
                </ul>
                <ul>
                    <li><i className="bi bi-person"></i> Login</li> |
                    <li><i className="bi bi-key"></i> Register</li>
                </ul>
        </section>
            <section>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                  <div><Link to="/"><img src="https://demo.themexbd.com/html/sk/edube/assets/img/e-logo.png" alt="" /></Link></div>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll gap-1">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/service">Service</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="course">Course</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                        </li>   
                    </ul>
                </div>
                <div><button className='btn'>Admit Now</button></div>
            </div>
        </nav >
        </section>

    </>
  )
}

export default Header
