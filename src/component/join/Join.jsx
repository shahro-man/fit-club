import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'


const Join=()=> {
    const form = useRef()

    const emailSender =(e)=>{
        e.preventDefult()
        emailjs.sendForm('service_utvfjf1','template_ftkw9mj',form.current,'-Q2_j4g9HQLQ3fY8G')
        .then((result)=>{
            console.log(result.text)
        },(error)=>{
            console.log(error.test)
        })
    }
  return (
    <div className='join'>
        <div className='left-j'>
            <hr></hr>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US</span>
            </div>
        </div>

        <div className='right-j'>
            <form ref={form} className='email-container' onSubmit={emailSender}>
                <input type="email" name='user-email' placeholder='enter your email'/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join