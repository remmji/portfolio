import React from 'react'
import { Github, Facebook, Linkedln } from '../components/AllSvgs'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

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
            <Link to="https://github.com/remmji" target="_blank" style={{color: 'inherit'}}>
                <Github width={25} height={25} fill='currentColor' />
            </Link>
        </div>
        <div>
            <Link to="https://www.facebook.com/profile.php?id=100008573739739" style={{color: 'inherit'}} target="_blank" >
                <Facebook width={25} height={25} fill='currentColor' />
            </Link>
        </div>
        <div>
            <Link to="https://www.linkedin.com/in/remigiusz-czarnecki-598989269/?original_referer=" style={{color: 'inherit'}} target="_blank" >
                <Linkedln width={25} height={25} fill='currentColor' />
            </Link>
        </div>
        <Line/>
    </Icons>
  )
}

export default SocialIcons