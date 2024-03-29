import React from 'react'
import course from '../Data'


function Home() {
    return (
        <>
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text1"><h3 className='fw-bold m-auto'>Build your future now</h3><h1 className='fw-bold'>Find Your Perfect Courses
                            And Improve Your Skills</h1><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quo aliquid molestias, praesentium quod dignissimos quasi nobis minima amet quisquam harum asperiores at nesciunt cupiditate accusamus fugit option.</p><button className='read-more'>Read More</button></div>
                        <div className="col-lg-6 mt-3"><img src="https://demo.themexbd.com/html/sk/edube/assets/img/e-slider-rim.png" alt="" /></div>
                    </div>
                </div>
            </section>
            <section className='step1'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-3"><i className="bii bi-person-bounding-box"></i><h4 className="step1h4">Certified teacher</h4><p className='step1p'>Education is the most powerful weapon which you can use to change.</p></div>
                        <div className="col-lg-3"><i className="bii bi-book"></i><h4 className='step1h4'>Certification</h4><p className='step1p'>Education is the most powerful weapon which you can use to change.</p></div>
                        <div className="col-lg-3"><i className="bii bi-bank"></i><h4 className='step1h4'>Smart campus</h4><p className='step1p'>Education is the most powerful weapon which you can use to change.</p></div>
                        <div className="col-lg-3"><i className="bii bi-currency-rupee"></i><h4 className='step1h4'>Scholarship</h4><p className='step1p'>Education is the most powerful weapon which you can use to change.</p></div>
                    </div>
                </div>
            </section>
            <section className='step2 mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 step2part1"><h6 className='step2h6'>WHAT’S OUR MAIN GOAL</h6><h1 className='step2h1'>WE TEACH <span className='color'>THE FUNDAMENTALS</span> OF ART WHILE ENCOURAGING <span className='color'>CREATIVITY.</span></h1>
                        Education is an important part of human life. Education gives meaning to our life as it enables the growth and development of our mind and intellect. An educated society is an enlightened and empowered one important part of human.<br/><br/>
                        <div className="row">
                            <div className="col-lg-6">
                            <p><i className="bi bi-check2-square"></i> Popular topics to learn now</p>
                            <p><i className="bi bi-check2-square"></i> Find the right instructor for you</p>
                            <p><i className="bi bi-check2-square"></i> Get access to our top courses</p></div>
                            <div className="col-lg-6">
                            <p><i className="bi bi-check2-square"></i> Popular topics to learn now</p>
                            <p><i className="bi bi-check2-square"></i> Find the right instructor for you</p>
                            <p><i className="bi bi-check2-square"></i> Get access to our top courses</p></div>
                            </div><br/><button className='btn'>Explore More</button></div>
                        <div className="col-lg-6"><img className='w-100 nn' src="https://demo.themexbd.com/html/sk/edube/assets/img/e-about.jpg" alt="" /></div>
                        
                    </div>
                </div>
            </section>
            <section className='step3 mb-3'>
                <div className="container">
                <h5 className='step3h5'>FEATURED COURSES</h5>
                    <h1 className='step3h1'>FIND YOURS FROM <span className='color'>THE COURSE</span></h1> 
                    <div className="row py-5">
                        {course.map((details)=>(
                            <div className="col-lg-4"><img className='w-100' src={details.image} alt="" /><h6 className='fw-bold mt-3'>{details.title}</h6></div>
                        ))}
                   
                        
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
            <section className='step5 mt-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"> <span className='span3'>GET YOUR QUALITY SKILLS CERTIFICATE THROUGH EADUBE</span><button className='btn mt-3'>Get It Now <i className="bi5 bi-arrow-right-short"></i></button></div>
                        <div className="col-lg-6"><img src="https://demo.themexbd.com/html/sk/edube/assets/img/e-call.png" alt="" /></div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
