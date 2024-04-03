import React from 'react'
import course from '../Data'

function Course() {
  return (
    <div>
        <section className='course'>
        <div className='courseh2'><h2>Course</h2><p className='coursep'> You Here! | Home | Course</p></div>
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
    </div>
  )
}

export default Course
