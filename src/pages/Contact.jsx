import React from 'react'

function Contact() {
  return (
    <div>
        <section className='contact'>
        <div className='contacth2'><h2>Contact</h2><p className='contactp'> You Here! | Home | Contact</p></div>
      </section>
      <section className='form'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className=' text-left contact1'>
                <div>
                  <h3 className='contacth3'>WE ARE WAITING</h3>
                  <h4 className='contacth4'>REQUEST A QUOTE</h4>
                  <div className="row gap-3 mt-4">
                    <div className="col-lg-12 inner_name_form">
                      <input type='text' name='name' placeholder='Your Name*'></input>
                    </div>
                    <div className="col-lg-12 inner_email_form"><input type='text' name='email' placeholder='Email*'></input></div>
                    <div className="col-lg-12 inner_message_form"><input type='text' name='message' placeholder='Message*'></input></div>
                    <div><button className='formbtn'>SEND MESSAGE</button></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6"><iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.029932730954!2d85.3422330742532!3d27.685469726458326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d99470043%3A0x167d008efb47d64c!2sBroadway%20Infosys!5e0!3m2!1sen!2snp!4v1712038411680!5m2!1sen!2snp" width="600" height="450" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
