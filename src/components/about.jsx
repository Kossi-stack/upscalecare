import React from 'react';

function About(props) {
  return (
    <div id='about'>
      <div className='s-about'>
         <h1>About</h1>
           Here are some of the services we offer
            <img src={props.image} alt={props.alt}></img>
       </div>
       
        <div className='s-b-text'>
         <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
    </div>
  )
}

export default About;