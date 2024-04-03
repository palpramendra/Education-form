import React from 'react'

function Blog() {
  return (
    <div>
       <section className='blog'>
        <div className='blogh2'><h2>Blog</h2><p className='blogp'> You Here! | Home | Blog</p></div>
      </section>
      <section className='blog1'> 
        <div className="container">
          <h6 className='blog1h6'>OUR BLOG</h6>
          <h2 className='blog1h2'>VIEW OUR <span className='blog1span'>RECENT </span>BLOG</h2>
          <div className="row">
            <div className="col-lg-4"><img className='w-100' src="https://demo.themexbd.com/html/sk/edube/assets/img/blog1.jpg" alt="" />
            <h6 className='blogrowh6'>A teacher affects eternity; he can never telll wher his influence stops.</h6><p className='blogrowp'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='blogbtn'>Read More</button></div>
            <div className="col-lg-4"><img className='w-100' src="https://demo.themexbd.com/html/sk/edube/assets/img/blog2.jpg" alt="" />
            <h6 className='blogrowh6'>Education makes a people easy to lead but difficult to drive:easy govern.</h6><p className='blogrowp'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> <button className='blogbtn'>Read More</button></div>
            <div className="col-lg-4"><img className='w-100' src="https://demo.themexbd.com/html/sk/edube/assets/img/blog3.jpg" alt="" /><h6 className='blogrowh6'>You educate a man; you educate a man. you are a educate women;you educate</h6><p className='blogrowp'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> <button className='blogbtn'>Read More</button></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
