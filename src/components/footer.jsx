import React from 'react'
import { images, icons } from '../constants';

const Footer = () => {
  return (

    <div className="flex justify-around p-8 h-96 bg-[#003348] text-white">
      <div className="w-48">
        <p className="font-bold mb-2 text-xl">UpScaleCare</p>
        <p>UpScalecare administrative support entry and all health care service.</p>
        <div className="bg-white w-36 h-32 mt-2 text-black">
          <img className="h-12 w-36 object-cover top-100 -z-10" src={images.healthcare} alt="" />
          <div className="h-24 pl-2">
            <p className="my-2">UpScale Care</p>
            <button type="button" className="bg-white border-2 border-black text-black rounded-md px-2 py-1">See Report</button>
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold mb-2 text-xl">Our Service</p>
        <ul>
          <li>COVID-19</li>
          <li>Upscale Care Careers</li>
          <li>Statement of Purpose</li>
          <li>Duty of Candour</li>
          <li>Statement of Good Practice</li>
          <li>Modern Day Slavery Statement</li>
          <li>Last Power of Attorney Application</li>
        </ul>
      </div>
      <div>
        <p className="font-bold mb-2 text-xl">Quick Links</p>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Work with Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
          <li>Submit a Complain</li>
          <li>Report an Incident</li>
        </ul>
      </div>
      <div>
        <p className="font-bold mb-2 text-xl">Follow Us</p>
        <div className="flex gap-2 mt-2">
          <img src={icons.twitter} alt="" />
          <img src={icons.linkedin} alt="" />
          <img src={icons.facebook} alt="" />
        </div>
        <div className="mt-4">
          <p>Subscribe our Newsletter</p>
          <input className="rounded-lg block my-2 p-2" type="text" name="email" id="email" placeholder="email address" />
          <button type="button" className="btn-blue">Submit Now</button>
        </div>
      </div>
    </div>
  )
}

export default Footer