import React from 'react';
import { images, icons } from '../../constants';
import { services, qualities } from '../../constants/data';

const Home = () => {

  return (
    <section className="font-nunito">

      <div className="bg-black/60 h-96 flex flex-col items-center text-white justify-center">
        <img className="absolute -z-10 h-96 object-cover w-full" src={images.healthcare} alt="Healthcare main Image" />
        <h1 className="text-4xl font-bold">Welcome to Upscale Care</h1>
        <p className="my-6">Life-Changing Home Care</p>
        <button className="border-2 border-white px-2 py-1 rounded-lg hover:bg-gray-200 hover:text-black">Get in Touch</button>
      </div>

      <div className="flex p-8 gap-4 justify-around">
        <img className="h-68 w-[40%] rounded-lg object-cover" src={images.healthcare} alt="" />
        <div className="w-[50%] flex flex-col justify-center">
          <p className="font-bold text-2xl">Why Choose Us?</p>
          <p className="pt-4 text-gray-600">
            We value our all clients and employees, treating them with utmost pride and esteem, recognising their contributions to the organisation.
          </p>
          <div className="flex gap-4 pt-4">
            <img src={icons.mark} alt="" />
            <p>We employ you to be who you want to be</p>
          </div>
          <div className="flex gap-4 pt-4">
            <img src={icons.mark} alt="" />
            <p>We do things how you want them to be done</p>
          </div>
          <div className="flex gap-4 pt-4">
            <img src={icons.mark} alt="" />
            <p>The management will visit you often to ensure you are happy with the care you recieve</p>
          </div>
          <button className="btn-blue mt-8">Read More</button>
        </div>
      </div>

      <div className="flex flex-col items-center px-16 py-8 bg-blue-100">
        <p className="text-2xl font-bold text-blue-500">Our Service</p>
        <p className="my-2">
          We specialise in the supply of care services to children, young people, and adults in a variety of community settings, to promote their independence, whilst maintaining their dignity and quality of life. We will work with a range of services from Social Care, Clinical Commissioning Groups, Private Clients, etc.
        </p>
        <div className="flex justify-around w-full">
          <button type="button"><img src={icons.arrowLeft} alt="Previous Service" /></button>
          {
            services.map((service) => (
              <div className="bg-white rounded-lg flex flex-col items-center w-80 py-4">
                <div className="flex justify-center px-4">
                  <img className="h-48 object-cover rounded-lg" src={service.image} alt="" />
                </div>
                <p className="mt-2 text-xl font-bold">{service.name}</p>
                <p className="m-2">{service.desc}</p>
                <button className="btn-blue"><a href={service.to}>Read More</a></button>
              </div>
            ))
          }
          <button type="button"><img src={icons.arrowRight} alt="Previous Service" /></button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <p className="text-2xl font-bold text-blue-500">Quality Domiciliary Care Service</p>
        <p className="pt-4 text-center text-lg">
          UpScale Care provides in-home senior care, helping older adults continue to live well and independently at home.
        </p>
        <div className="flex gap-4">
          {
            qualities.map((quality) => (
              <div className="my-2 quality">
                <img className="w-56 object-cover my-2 rounded-lg h-40" src={quality.image} alt="" />
                <p className="text-lg text-center font-bold text-blue-500">{quality.name}</p>
              </div>
            ))
          }
        </div>
        <div className="my-4 flex justify-center">
          <button type="button" className="btn-blue">All Services</button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 w-full">
        <p className="text-2xl font-bold text-blue-500">Working For Upscale Care</p>
        <p className="pt-4 text-center text-lg">
          Here at UpScale Care, we recruit professional nursing and support staff and supply them to an extensive range of clients within the healthcare industry
        </p>
        <div className="h-56 w-[800px] rounded-lg flex flex-col bg-black/50">
          <img className="w-[800px] h-56 rounded-lg absolute -z-10 object-cover" src={images.healthcare} alt="" />
          <div className="text-white h-full flex flex-col justify-center gap-4 pl-8">
            <p className="font-bold text-2xl">Online Registration</p>
            <p className="text-xl">We have a fantastic opportunity for healthcare service.</p>
            <button type="button" className="btn-blue">Join Us Now</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home