import React from 'react'

function Footer() {
  return (
    <>
      <section className='footer py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 edu"><img className='mb-3' src="https://demo.themexbd.com/html/sk/edube/assets/img/e-tlogo.png" alt="" /><p className='footerp'>Education is the basic necessity of life. It is an integral tool that aids the overall growth and development. Education has a plethora of meanings and educates.</p>
            <div className='icon'>
            <a href='#'><i className="bifooter bi-facebook"></i></a>
            <a href='#'><i className="bifooter bi-linkedin"></i></a>
            <a href='#'><i className="bifooter bi-instagram"></i></a>
            </div></div>
            <div className="col-lg-3"><h3 className='footerh3'>Resources</h3>
              <ul className='footerul'>
                <li><a className='footera' href="#">About Us</a></li>
                <li><a className='footera' href="#">Our Services</a> </li>
                <li><a className='footera' href="#">Our Expert Team</a> </li>
                <li><a className='footera' href="#">Our Gallery </a></li>
                <li><a className='footera' href="#">Our Clients </a></li>
              </ul></div>
            <div className="col-lg-3"><h3 className='footerh3'>Courses</h3>
              <ul className='footerul'>
                <li><a className='footera' href="#">Web Design</a></li>
                <li><a className='footera' href="#">Web Development</a></li>
                <li><a className='footera' href="#">Marketing</a></li>
                <li><a className='footera' href="#">Biology</a></li>
                <li><a className='footera' href="#">Business</a></li>
              </ul></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
