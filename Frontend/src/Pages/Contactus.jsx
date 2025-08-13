import React from 'react';
import Navbar from '../Components/Navbar';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'; // Make sure these are imported at the top


const Contactus = () => {
  return (
    <div>
      <Navbar />

      <div className='flex flex-col md:flex-row space-x-0 md:space-x-4 px-4 md:px-10 py-10'>
        {/* Left Section: Form */}
        <div className='md:w-1/2 w-full bg-white py-10 px-6 rounded-lg'>
          <div className='mb-6'>
            <Link to='/' className='flex items-center text-emerald-600 hover:text-emerald-900'>
              <ArrowLeft className='h-4 w-4 mr-1' />
              Back to Home
            </Link>
          </div>

          <div className='mb-5'>
            <h2 className='font-bold text-2xl  mb-3'>Get in Touch</h2>
            <p className='text-sm text-left '>
              Ready to transform your healthcare practice? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className='w-full bg-yellow-400 rounded-lg shadow-lg mt-6'>
            <div className='text-left px-6 py-6 bg-white rounded-t-lg'>
              <h2 className='text-xl font-semibold mb-1'>Contact Form</h2>
              <p className='text-sm text-gray-600'>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className='px-6 py-6 grid grid-cols-1 gap-4 md:grid-cols-2 bg-white rounded-b-lg'>
              <div>
                <label className='block mb-1 text-sm font-medium'>First Name</label>
                <input
                  type='text'
                  placeholder='John'
                  className='w-full border border-gray-300 rounded-md px-4 py-2'
                />
              </div>

              <div>
                <label className='block mb-1 text-sm font-medium'>Last Name</label>
                <input
                  type='text'
                  placeholder='Doe'
                  className='w-full border border-gray-300 rounded-md px-4 py-2'
                />
              </div>

              <div className='md:col-span-2'>
                <label className='block mb-1 text-sm font-medium'>Email Address</label>
                <input
                  type='email'
                  placeholder='john.doe@example.com'
                  className='w-full border border-gray-300 rounded-md px-4 py-2'
                />
              </div>

              <div className='md:col-span-2'>
                <label className='block mb-1 text-sm font-medium'>Phone Number</label>
                <input
                  type='tel'
                  placeholder='+1 (555) 123-4567'
                  className='w-full border border-gray-300 rounded-md px-4 py-2'
                />
              </div>

              <div className='md:col-span-2'>
                <label className='block mb-1 text-sm font-medium'>Organization</label>
                <input
                  type='text'
                  placeholder='Your healthcare organization'
                  className='w-full border border-gray-300 rounded-md px-4 py-2'
                />
              </div>

              <div className='md:col-span-2'>
                <label className='block mb-1 text-sm font-medium'>Message</label>
                <textarea
                  name='message'
                  placeholder='Tell us about your needs and how we can help...'
                  className='w-full border border-gray-300 rounded-md px-4 py-2 h-24 resize-none'
                ></textarea>
              </div>

              <div className='md:col-span-2 text-right'>
                <button
                  type='submit'
                  className='bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section: Optional Image or Info */}
        <div className='md:w-1/2 py-20 px-6 w-full rounded-lg mt-6 md:mt-0 p-6'>
  <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

  <div className='space-y-4'>

    {/* Email Us */}
    <div className='flex items-start p-4 bg-white rounded-lg shadow'>
      <div className='p-2 bg-green-100 rounded-md'>
        <Mail className='text-green-600' size={24} />
      </div>
      <div className='ml-4'>
        <h4 className='text-md font-semibold'>Email Us</h4>
        <p className='text-sm text-gray-600'>Send us an email anytime</p>
        <p className='text-sm text-green-600 font-medium mt-1'>info@novahealthconsultancy.com</p>
      </div>
    </div>

    {/* Call Us */}
    <div className='flex items-start p-4 bg-white rounded-lg shadow'>
      <div className='p-2 bg-blue-100 rounded-md'>
        <Phone className='text-blue-600' size={24} />
      </div>
      <div className='ml-4'>
        <h4 className='text-md font-semibold'>Call Us</h4>
        <p className='text-sm text-gray-600'>Mon–Fri from 8am to 5pm</p>
        <p className='text-sm text-blue-600 font-medium mt-1'>0987654321</p>
      </div>
    </div>

    {/* Visit Us */}
    <div className='flex items-start p-4 bg-white rounded-lg shadow'>
      <div className='p-2 bg-orange-100 rounded-md'>
        <MapPin className='text-orange-600' size={24} />
      </div>
      <div className='ml-4'>
        <h4 className='text-md font-semibold'>Visit Us</h4>
        <p className='text-sm text-gray-600'>Come say hello at our office</p>
        <p className='text-sm text-orange-600 font-medium mt-1 leading-5'>
          4 kilo infront of Alpah Collage<br />
          
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Contactus;
