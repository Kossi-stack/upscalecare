import images from '../../constants/images';

const Contact = () => {
  return (
    <>
      <div className='font-nunito'>
        <div className="bg-black/60 h-96 flex flex-col items-center text-center text-white justify-center">
          <img className="absolute -z-10 h-96 object-cover w-full" src={images.healthcare} alt="Healthcare main Image" />
          <h1 className="text-4xl font-bold">Contact Upscale Care</h1>
          <p className="mt-6 text-lg">Get in touch about recruitment or care service</p>
          <p className="mb-6">Our mission is to support people in their homes. <br /> If you’d like to know more about Upscale care service <br/> or would like to join our care team, please get in touch below.</p>
          <button className="border-2 border-white px-2 py-1 rounded-lg hover:bg-gray-200 hover:text-black">Get in Touch</button>
        </div>
      </div>
      <div className='flex justify-between items-start px-32 h-[80vh]'>
        <div className='flex flex-col justify-around h-full'>
          <div>
            <h1 className='text-primary text-xl'>Message Us</h1>
            <p className='my-3'>Get in Touch and Let us Care for your Loved Ones.</p>
            <hr />
          </div>
          <div>
            <h1 className='text-primary text-xl'>Contact Us</h1>
            <p className='my-3'>
              <ul>
                <li>T: 3748 273 8393</li>
                <li>T: 5895 039 5857</li>
                <li>E: Info@upscalecare.com</li>
                <li>E: recruitment@upscalecare.com</li>
              </ul>
            </p>
            <hr />
          </div>
          <div>
            <h1 className='text-primary text-xl'>Location</h1>
            <p className='my-3'>United Kingdom, London.</p>
            <img className="h-12 object-cover w-24" src={images.healthcare} alt="Location" />
          </div>
        </div>
        <div className='mt-6'>
          <h1 className='text-lg mt-3 mb-2'>Your Name</h1>
          <input className='border border-black rounded-md px-3 py-1 mr-4' type="text" placeholder='First Name' />
          <input className='border border-black rounded-md px-3 py-1' type="text" placeholder='Last Name' />
          <div className='flex gap-4'>
            <div>
              <h1 className='text-lg mt-3 mb-2'>Your Email Address</h1>
              <input className='border border-black rounded-md px-3 py-1' type="text" placeholder='name@gmail.com' />
            </div>
            <div>
              <h1 className='text-lg mt-3 mb-2'>Your Phone Number</h1>
              <input className='border border-black rounded-md px-3 py-1' type="text" placeholder='09444444444' />
            </div>
          </div>
          <h1 className='text-lg mt-3 mb-2'>Your Message</h1>
          <textarea className='border border-black rounded-lg px-3 py-1' name="message" id="message" cols="45" rows="8"></textarea>
          <br />
          <div className='text-center mt-4 w-full'>
            <button type='button' className='!w-full btn-blue'>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact