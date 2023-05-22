import React, { useState } from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
type Props = {}
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}
const Contact = (props: Props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = formData => {
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
      alert('Thankyou. I will get back to you shortly');
    }, (error) => {
      console.log(error);
      alert('Something went wrong')
    }

    )
  };

  return (
    <div className='bg-drbgclr relative  flex mx-auto justify-center h-screen '>
      <div className='flex flex-col items-center space-y-10 mt-6'>
        <h1 className='tracking-[20px] text-2xl md:text-3xl text-drgry uppercase font-semibold '>Contact</h1>
        <h2 className=' text-drfgclr md:flex justify-center items-center flex flex-col font-semibold md:text-xl md:font-bold uppercase'> <span> Looking for the perfect solution?</span> <span className='decoration-drfgclr underline text-drwht'> I&apos;ve got you covered.</span> </h2>
        <div className='space-y-3 mb-5'>
          <div className='flex text-drwht text-md space-x-5 items-center justify-center'>
            <PhoneIcon className='h-6 w-6 text-drfgclr' />
            <p>+1 647-866-3474</p>
          </div>
          <div className='flex text-drwht text-md  space-x-5 items-center justify-center '>
            <EnvelopeIcon className='h-6 w-6 text-drfgclr' />
            <p>Souravthind07it@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-3' action="">
          <div className='space-x-2'>
            <input className='inputbox' 
            type="text" required
            placeholder='First Name' 
            {...register("firstName")} 
            value={formData.firstName} 
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            } />
            <input 
            placeholder='Last Name' 
            className='inputbox' 
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
          <button className='bg-drfgclr px-4 py-2.5 rounded-md text-slate-700 font-semibold text-lg'>Submit</button>
        </form>
      </div>
      <div></div>
    </div>
  )
}

export default Contact