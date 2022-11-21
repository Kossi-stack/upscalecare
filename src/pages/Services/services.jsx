import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { images } from '../../constants';
import { serviceData } from '../../serviceData';
import ServiceItem from './ServiceItem';



export const points = [
  {
    title: "Keep your home tidy and clean",
    desc: "help with domestic tasks like washing and ironing."
  },
  {
    title: "Keep connected with friends",
    desc: "meet friends and family, go to school, college or clubs, pursue a favourite hobby."
  },
  {
    title: "Keep fit and healthy",
    desc: "attend medical appointments, eat well or go to a fitness centre."
  },
  {
    title: "Stay independent",
    desc: "take a shopping trip to town or pay bills, manage money."
  },
]



const Services = () => {
  return (
    <div>services</div>
  )
}

export default Services