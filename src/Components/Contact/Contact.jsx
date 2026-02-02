import React, { useState } from 'react'
import './Contact.css'
function Contact() {

  const [ContactDatas, SetContactDatas] = useState({
    Name: "",
    PhoneNumber: "",
    Message: ""
  })

  const handleChange = (e) => {
    SetContactDatas({
      ...ContactDatas,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <section className='Contact'>

        <div className='ContactDetails'>
          <div className='ContactAddress'>
            <h4>Contact</h4>
            <h1> Get in touch with us</h1>
            <div className='ContactDatas'>

              <div className='ContactCall'>
                <div className='callLogo'>
                  <div className='callnumber'>
                    <svg width="26" height="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.05 5A5 5 0 0 1 19 8.95"></path>
                      <path d="M15.05 1A9 9 0 0 1 23 8.94"></path>
                      <path d="M22 16.92v3a1.998 1.998 0 0 1-2.18 2 19.791 19.791 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16.001 16.001 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.908.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92Z"></path>
                    </svg>
                  </div>
                </div>
                <div className='ContactNumber'>

                  <b>Call us on: +91-8610598460</b><br></br>
                  Talk to our Training Manager
                </div>

              </div>

              <div className='ContactEmail'>
                <div className='EmailLogo'>
                  <div className='EmailAddressLogo'>
                    <svg width="26" height="56" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.875 3.75H4.125A2.628 2.628 0 0 0 1.5 6.375v11.25a2.628 2.628 0 0 0 2.625 2.625h15.75a2.627 2.627 0 0 0 2.625-2.625V6.375a2.627 2.627 0 0 0-2.625-2.625Zm-.665 4.342-6.75 5.25a.75.75 0 0 1-.92 0l-6.75-5.25a.75.75 0 1 1 .92-1.184L12 11.8l6.29-4.892a.75.75 0 0 1 .92 1.184Z"></path>
                    </svg>
                  </div>
                </div>
                <div className='EmailAddress'>

                  <b>Email us directly</b><br></br>
                  nurtureinfotech@gmail.com
                </div>

              </div>


              <div className='ContactLocation'>
                <div className='LocationLogo'>
                  <div className='AddressLogo'>
                    <svg width="26" height="56" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.5c-4.14 0-7.5 3.024-7.5 6.75 0 6 7.5 14.25 7.5 14.25s7.5-8.25 7.5-14.25c0-3.726-3.36-6.75-7.5-6.75ZM12 12a3 3 0 1 1 0-5.999A3 3 0 0 1 12 12Z"></path>
                    </svg>
                  </div>
                </div>
                <div className='Address'>

                  <b>Our Location</b><br></br>
                  161 Parimalam Complex,  II Floor, Mettur Rd, above UCO Bank, Erode, Tamil Nadu 638011
                </div>

              </div>

            </div>


          </div>
          <div className='ContactForm'>
            <h1>We will Answer all your Questions</h1>
            <div className='FormDesign'>

              <input type='text' onChange={handleChange} autoComplete='off' placeholder='Name' name='Name' value={ContactDatas.Name}></input>
              <label className='label'></label>
              <input type='text' onChange={handleChange} autoComplete='off' placeholder='PhoneNumber' name='PhoneNumber' value={ContactDatas.PhoneNumber}></input>
              <label className='label'></label>
              <textarea  onChange={handleChange} autoComplete='off' placeholder='Message' name='Message' value={ContactDatas.Message}>
              </textarea>
              <label className='label'></label>
              <button className='Contactbutton'>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>


            </div>

          </div>

        </div>

        <div className='MapDesign'>
        <map>

        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.877974411481!2d77.7155752750502!3d11.343622588841743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f3998053453%3A0x7ba00457d4d7cf91!2sNurture%20Infotech%20-%20Erode%20(Python%20%7C%20Java%20%7C%20Fullstack%20%7C%20Web%20Design%20%7C%20Graphic%20Design%20%7C%20Internship%20%7C%20Tally%20%7C%20Data%20Analytics)!5e0!3m2!1sen!2sin!4v1706511682273!5m2!1sen!2sin" 
        width="100%" height="500" 
        style={{"border":"1px solid black"}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>

        </map>
        </div>
      </section>

    </div>
  )
}

export default Contact
