import React from 'react'
import { Github, Facebook } from '../components/AllSvgs'
import styled from 'styled-components'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.theme.text};

`

const SocialIcons = () => {
  return (
    <Icons>
        <div>
            <a style={{color: 'inherit'}} target="_blank"  href="https://github.com/remmji">
                <Github width={25} height={25} fill='currentColor' />
            </a>
        </div>
        <div>
            <a style={{color: 'inherit'}} target="_blank" href="https://www.facebook.com/profile.php?id=100008573739739">
                <Facebook width={25} height={25} fill='currentColor' />
            </a>
        </div>
        <Line/>
    </Icons>
  )
}

export default SocialIcons