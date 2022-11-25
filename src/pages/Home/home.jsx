import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { images } from '../../constants';
import { workData } from '../../data';
import mark from '../../assets/icons/mark.png'

const Home = () => {

  return (
    <>
      <div className="bg-black/60 h-96 flex flex-col items-center text-white justify-center">
        <img className="absolute -z-10 h-96 object-cover w-full" src={images.healthcare} alt="Healthcare main Image" />
        <h1 className="text-4xl font-bold">Welcome to Upscale Care</h1>
        <p className="my-6">Life-Changing Home Care</p>
        <button className="border-2 border-white px-2 py-1 rounded-lg hover:bg-gray-200 hover:text-black">Get in Touch</button>
      </div>
      <div className="flex p-8 gap-4 font-nunito justify-around">
        <img className="h-68 w-[40%] rounded-lg object-cover" src={images.healthcare} alt="" />
        <div className="w-[50%] flex flex-col justify-center">
          <p className="font-bold text-xl">Why Choose Us?</p>
          <p className="pt-4 text-gray-600">
            We value our all clients and employees, treating them with utmost pride and esteem, recognising their contributions to the organisation.
          </p>
          <div className="flex gap-4 pt-4">
            <img src={mark} alt="" />
            <p>We employ you to be who you want to be</p>
          </div>
          <div className="flex gap-4 pt-4">
            <img src={mark} alt="" />
            <p>We do things how you want them to be done</p>
          </div>
          <div className="flex gap-4 pt-4">
            <img src={mark} alt="" />
            <p>The management will visit you often to ensure you are happy with the care you recieve</p>
          </div>
          <button className="bg-blue-400 mt-4 rounded-lg w-fit px-2 py-1 text-white">Read More</button>
        </div>
      </div>
    </>
  )
}

export default Home