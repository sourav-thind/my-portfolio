import React, { useEffect, useState } from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Toast from './Toast'
type Props = {}
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}
const Contact = (props: Props) => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = formData => {
    setShowToast(true);

    
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
    emailjs.send(
      'service_v97y3bs',
      'template_m9ixk8j',
      {
        from_name: formData.firstName + " " + formData.lastName,
        to_name: 'Souravpreet Singh',
        from_email: formData.email,
        to_email: 'souravthind07itgmail.com',
        the_subject: formData.subject,
        message: formData.message

      },
      'wjSL_o0Va0gsAS_b9'
    ).then(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    //  console.log(formData)
      
  
 
    }, (error) => {
      console.log(error);
      alert('Something went wrong')
    }

    )
  };

  return (
    <div >
       <div className="fixed top-[6rem] right-4 z-50  text-drbgclr px-4 py-2 rounded">
      {showToast && <Toast  />}
    </div>
      <div className='bg-drbgclr  flex mx-auto justify-center  mt-[10vh] h-[80vh]  '>
     
      <div className='flex flex-col items-center  space-y-8 '>
        <h1 className='tracking-[20px] text-2xl md:text-3xl text-drwht uppercase font-semibold mt-6'>Contact</h1>
        <h2 className=' text-drfgclr md:flex justify-center items-center flex flex-col font-semibold text-xl md:font-bold uppercase'> <span> Looking for the perfect solution?</span> <span className='decoration-drfgclr underline underline-offset-4 text-drwht'> I&apos;ve got you covered.</span> </h2>
        <div className='space-y-1 mb-4'>
          <div className='flex text-drwht text-lg space-x-5 items-center justify-center'>
            <PhoneIcon className='h-6 w-6 text-drfgclr' />
            <p>+1 647-866-3474</p>
          </div>
          <div className='flex text-drwht text-lg  space-x-5 items-center justify-center '>
            <EnvelopeIcon className='h-6 w-6 text-drfgclr' />
            <p>souravthind07it@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 lg:space-y-3 w-[360px]' action="">
          <div className='space-x-2 flex '>
            <input className='inputbox w-[175px]' 
            type="text" required
            placeholder='First Name' 
            {...register("firstName")} 
            value={formData.firstName} 
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            } />
            <input 
            placeholder='Last Name' 
            className='inputbox w-[175px]' 
            type="text" 
            {...register("lastName")} 
            value={formData.lastName} 
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            } />
          </div>
          <input required
          placeholder='Email' 
          className='inputbox' 
          type="email" 
          {...register("email")} 
          value={formData.email} 
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          } />
          <input 
          placeholder='Subject' 
          className='inputbox' 
          type="text" 
          {...register("subject")} 
          value={formData.subject} 
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          } />
          <textarea required
          placeholder='Message' 
          className='inputbox' 
          id="" {...register("message")} 
          value={formData.message} 
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          } />
          <button className='bg-drfgclr px-4 py-2.5 rounded-md text-slate-700 hover:text-xl font-semibold text-lg' >Submit</button>
       
        </form>
      </div>
      <div></div>
    </div>
    </div>
  )
}

export default Contact