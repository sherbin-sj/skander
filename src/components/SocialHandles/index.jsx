import React from 'react'
import "./SocialHandles.css" 
import { socialHandles } from '../../data'

const SocialHandles = () => {
  return (
    <div className="flex social__handles">
        {socialHandles.map((handle,index)=>(
            <a href= {handle.link} 
            className="flex__center icon" 
            target="_blank" 
            rel="noopener noreferrer"
            key={index} >
                {handle.icon} </a>
        ))}
    </div>
  )
}

export default SocialHandles