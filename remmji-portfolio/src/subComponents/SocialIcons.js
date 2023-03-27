import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Facebook } from '../components/AllSvgs'



const SocialIcons = () => {
  return (
    <div>
        <div>
            <Link to='/'>
                <Github width={25} height={25} fill='currentColor' />
            </Link>
        </div>
        <div>
            <Link to='/'>
                <Facebook width={25} height={25} fill='currentColor' />
            </Link>
        </div>
    </div>
  )
}

export default SocialIcons