import React, { useEffect, useState } from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
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
        to_email: 'souravthind07it@gmail.com',
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
    }, (error) => {
      console.log(error);
      alert('Something went wrong');
    });
  };

  return (
    <div>
      <div className="  right-4 z-50 text-drbgclr px-4 py-2 rounded">
        {showToast && <Toast />}
      </div>
      <div className="sm:h-[90vh] lg:h-[80vh] bg-drbgclr flex mx-auto justify-center  h-[90vh]  ">
        <div className="lg:space-y-6 flex flex-col items-center space-y-2">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl tracking-[20px] text-drwht uppercase font-semibold ">Contact</h1>
          <h2 className="text-drfgclr lg:text-2xl lg:mt-16 md:flex justify-center lg:flex-row items-center flex flex-col font-semibold text-lg md:font-semibold mt-0 uppercase gap-2">
            <span>Looking for the perfect solution?</span>
            <span className="decoration-drfgclr underline underline-offset-4 text-drwht"> I&apos;ve got you covered.</span>
          </h2>
          <div className="sm:space-y-0 lg:space-y-2 mb-0">
            <div className="flex text-drwht text-lg space-x-5 items-center justify-center">
              <PhoneIcon className="h-6 w-6 text-drfgclr" />
              <p>+1 647-866-3474</p>
            </div>
            <div className="flex text-drwht text-lg space-x-5 items-center justify-center">
              <EnvelopeIcon className="h-6 w-6 text-drfgclr" />
              <p>souravthind07it@gmail.com</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 lg:space-y-4 w-[360px] lg:w-[420px]" action="">
            <div className="space-x-1 flex">
              <input
                className="inputbox w-[207px] lg:h-12"
                type="text"
                required
                placeholder="First Name"
                {...register("firstName")}
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              <input
                placeholder="Last Name"
                className="inputbox w-[207px] lg:h-12"
                type="text"
                {...register("lastName")}
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <input
              required
              placeholder="Email"
              className="inputbox lg:h-12"
              type="email"
              {...register("email")}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              placeholder="Subject"
              className="inputbox lg:h-12"
              type="text"
              {...register("subject")}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            <textarea
              required
              placeholder="Message"
              className="inputbox sm:h-12 lg:h-16"
              {...register("message")}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button className="bg-drfgclr px-4 py-2.5 rounded-md text-slate-700 hover:text-xl font-semibold text-lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
