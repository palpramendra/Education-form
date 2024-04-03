import React from 'react'

function About() {
  return (
    <div>
      <section className='about'>
        <div className='abouth2'><h2>About</h2><p className='aboutp'> You Here! | Home | About</p></div>
      </section>
      <section className='about1'>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img className='w-100' src="https://demo.themexbd.com/html/sk/edube/assets/img/h3-about-1.jpg" alt="" />
            </div>
            <div className="col-lg-7 about2">
              <h6 className='step2h6'>WHAT’S OUR MAIN GOAL</h6><h1 className='step2h1'>WE TEACH <span className='color'>THE FUNDAMENTALS</span> OF ART WHILE ENCOURAGING <span className='color'>CREATIVITY.</span></h1>
              Education is an important part of human life. Education gives meaning to our life as it enables the growth and development of our mind and intellect. An educated society is an enlightened and empowered one important part of human.
            </div>
          </div>
        </div>
      </section>
      <section className='step4'>
                <div className="container">
                <h5 className='step3h5'>OUR TEACHERS, THEY ARE OUR PRIDE</h5>
                    <h1 className='step4h1'>OUR EXPERT <span className='color'>TEACHERS ARE HERE</span></h1>
                    <div className="row py-5">
                        <div className="col-lg-4"><img className='position' src="https://demo.themexbd.com/html/sk/edube/assets/img/e-team.png" alt="" /><div className='teacher'><h4>Maya Nepal</h4><p>CSE in Masters</p></div></div>
                        <div className="col-lg-4"><img className='position' src="https://demo.themexbd.com/html/sk/edube/assets/img/e-team2.png" alt="" /><div className='teacher'><h4>Tribhu Chet</h4><p>Head of Department</p></div></div>
                        <div className="col-lg-4"><img className='position' src="https://demo.themexbd.com/html/sk/edube/assets/img/e-team3.png" alt="" /><div className='teacher'><h4>Riya Rana</h4><p>UI / UX Designer</p></div></div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About
