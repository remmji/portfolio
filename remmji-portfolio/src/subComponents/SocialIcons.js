import React from 'react'
import { Github, Facebook, Linkedln } from '../components/AllSvgs'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {darkTheme} from '../components/Themes'
import { motion } from 'framer-motion';


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

@media (max-width: 30em){
left: calc(0rem + 2vw);;
}   
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.theme.text};
`

const SocialIcons = (props) => {
  return (
    <Icons>
        <motion.div
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        whileHover={{ x: 8}}
        >
            <Link to="https://github.com/remmji" target="_blank" style={{color: 'inherit'}}>
                <Github width={25} height={25} fill={props.theme ==='dark' ? darkTheme.text : darkTheme.body} />
            </Link>
        </motion.div>
        <motion.div
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        whileHover={{ x: 8}}
        >
            <Link to="https://www.facebook.com/profile.php?id=100008573739739" style={{color: 'inherit'}} target="_blank" >
                <Facebook width={25} height={25} fill={props.theme==="dark" ? darkTheme.text : darkTheme.body} />
            </Link>
        </motion.div>
        <motion.div
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        whileHover={{ x: 8}}
        >
            <Link to="https://www.linkedin.com/in/remigiusz-czarnecki-598989269/?original_referer=" style={{color: 'inherit'}} target="_blank" >
                <Linkedln width={25} height={25} fill={props.theme==="dark" ? darkTheme.text : darkTheme.body} />
            </Link>
        </motion.div>
        <Line style={{backgroundColor: props.theme==="dark" ? darkTheme.text : darkTheme.body}}
        initial={{
            height:0
        }}
        animate={{
            height: '8rem'
        }}
        transition={{
            type:'spring',duration:1, delay:0.8
        }}
        />
    </Icons>
  )
}

export default SocialIcons