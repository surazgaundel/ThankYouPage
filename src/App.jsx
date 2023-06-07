import { useState } from 'react'
import './index.css'
import Thankyou from './assets/thankyou.svg';
import Chaos from './assets/chaosdesign.svg';
import LinkedIn from './assets/Linkedin.svg';
import Instagram from './assets/Instagram.svg';
import Twitter from './assets/Twitter.svg';

function App() {


  return (
    <div className="flex flex-col items-center">
      <div className="mt-5">
        <img className='object-cover min-h-min' src={Thankyou} alt='thankyou'/>
      </div>
      <div className="text">
        <h1>Thank you !</h1>
        <p>Thank you so much for inviting me to do some test for your React Developer position. I truly appreciate the time you took to analyze with me about this opportunity and the company.</p>
      </div>
      <div>
        <img className='chaos1' src={Chaos} alt='chaos1'/>
        <img className='chaos2'src={Chaos} alt='chaos2'/>
      </div>
      <div className='flex flex-1 cursor-pointer social-media'>
        <a href='https://www.linkedin.com/in/suraz-gaundel-2198a416a/'rel="noopener noreferrer" target="_blank"><img src={LinkedIn} alt='LinkedIn'/></a>
        <a href='https://instagram.com' rel="noopener noreferrer" target="_blank"><img src={Instagram} alt='Instagram'/></a>
        <a href='https://twitter.com/SurazGaundel'rel="noopener noreferrer"  target="_blank"><img src={Twitter} alt='Twitter'/></a>
      </div>
    </div>
  )
}

export default App
