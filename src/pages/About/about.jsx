import React from 'react';
import { images } from '../../constants';


const About = () => {

  return (
    <section className="font-nunito">

      <div className="bg-black/60 h-96 flex flex-col items-center text-white justify-center">
        <img className="absolute -z-10 h-96 object-cover w-full rounded" src={images.healthcare6} alt="Healthcare about Image" />
        <h1 className="text-4xl font-bold">About Upscale Care</h1>
        <p className="my-6">Our mission is to attract,nurture and develop the very best care professionals around; and to ensure they're heard,valued and recognised for their essential work</p>
        <button className="border-2 border-white px-2 py-1 rounded-lg hover:bg-gray-200 hover:text-black">Contact Us</button>
      </div>

      <div className="flex p-8 gap-4 justify-around bg-blue-100">
        <div className="w-[50%] flex flex-col justify-center">
          <p className="font-bold text-2xl text-blue-500">Introducing Upscale Care</p>
          <p className="my-2">
           Upscale Care is a newly established care company that provides quality home care residents in Waltham forest and the sorrounding areas.We  are passionate about keeping people independent in their own homes,for as long as possible.
          </p>
        </div>
      </div>

      <div className="flex p-8 gap-4 justify-around">
        <img className="h-68 w-[40%] rounded-lg object-cover" src={images.healthcare7} alt="" />
        <div className="w-[50%] flex flex-col justify-center">
          <p className="font-bold text-2xl">What we do</p>
          <p className="pt-4">
          We are on a mission to support people in their own homes-their personal safe space where they are sorrounded by people,memories,possessions,comfort and communitied that mean the most.We support elderly and disabled adults to live a safe and independednt lifestyle at home.
          </p>
          <div className="flex gap-4 pt-4">
            <p>We work with adults of all ages with restricted mobility,physical and learning disabilities,brain injuries,mental health conditions,long-term diagnoses like dementia.We show them they matter,put them first and help them enjoy life.</p>
          </div>
        </div>
      </div>

  <div className="flex flex-col items-center px-16 py-8 bg-blue-100">
        <p className="text-2xl font-bold text-blue-500" >Why you should choose Us</p>

      
        <div className="flex p-8 gap-4 justify-around rounded-lg bg-blue-100">
        <div className="w-[50%] flex flex-col justify-center bg-white rounded m-0">
         <p class="font-bold text-2xl pl-5 leading-7 mt-10">
          Our Aims and Objective
          </p>
           <p className="leading-7 pl-5 pb-1 font-bold">
              At UpScale care we aim to: 
           </p>
           
          <ul className=" flex flex-col list-disc list-inside pl-5 ml-2 w-11/12 justify-start text-justify">
              <li className = 'pl-px text-justify w-full h-full'>We empower you to be who you are.</li>
              <li className = 'pl-px border-red-500'>We work around you and your life.</li>
              <li className = 'pl-px'>Our out of hours number is direct to the managing director.</li>
              <li className = 'pl-px'>We are transparent.</li>
              <li className = 'pl-px text-justify w-full h-full'>We have a team of spiritual professionals - we don't employ carers to simply do the job.</li>
              <li className = 'pl-px'>The manager will visit you often to ensure you are happy with the care you receive</li>
              <li className = 'pl-px'>We do things how you want them to be done.</li>
              <li className = 'pl-px'>If a carer cannot attend for whatever reason, the manager will tend to your visit, You will never go without.</li>
              <li className = 'pl-px'>You have continuity, the same 3/4 careers will provide your care you wont feel as though your home has been invaded and the staff will get to know just how you like things.</li>
              <li className = 'pl-px'>We are professional & safe.All of our staff have embroidered uniforms and ID tags that cannot be easily forged.</li>
              <li className = 'pl-px'>Our staff and reliable & friendly.</li>
              <li className = 'pl-px text-justify w-full h-full inline'>The personal touch & continuity.You will get to know your carers.We will never send lots of different faces.</li>
              <li className = 'pl-px'>We genuinely care!</li>     
           </ul>
          </div>
           <div className="w-[50%] flex flex-col mx-3 justify-start text-start bg-white rounded">
            <p className='px-5 mt-10 text-justify'>Our care are properly trained in many aspects of care and support. Our team are fantastic.Each and every carer enjoys their job and passionate about the people they care for. The team are selected via an intense screening process to ensure only the best individuals to represent our brand and provide top-notch care on our front line. Our team are supported and managed closely to ensure they always provide the level of care we expect.</p>
            <p className='px-5 mt-3 text-justify'>We are committed to achieving our aims and objectives and will ensure this through consistently reviewing our services and encouraging service users and their representatives to offer regular feedback.We are willing to help potential service users with their specific care needs by conducting a full risk assessment to ensure we can meet their needs safely and satisfactory,bearing in mind that we will be working in agreement with other relevant agencies such as local and health authorities. </p>
            <p className='px-5 mt-3 text-justify'>Upscale care specializes in developing and delivering outstanding care services to young and adult people so they can remain at home among their family and friends.We aim to meet and go beyond the outcomes set for every child we care for and are responsive to the progress made by our patients. </p>
           </div>   
       </div>
  </div>
  <div className="flex p-8 gap-4 justify-around">
        <img className="h-65 mt-12 mb-10 w-469 h-448 rounded-lg object-cover" src={images.healthcare8} alt="" />
        <div className="w-[50%] flex flex-col justify-start mt-14">
          <p className="font-bold text-2xl text-justify">Our Mission</p>
          <p className="pt-4 font-bold text-justify">We are building inspirational homecare in local communities.</p>
          <div className="flex gap-4 pt-4 text-justify">
            <p>Our mission is to attract, nurture and develop the very best care professionals around; and to ensure they’re heard, valued and recognised for their essential work, so that they’re motivated to provide our customers with the highest quality, life-changing support.<br/>Our people and customers are in reassuringly safe, experienced hands.</p>
          </div>
        </div>
  </div>
    </section>
  )
}

export default About