import React from 'react'
import styled, { keyframes } from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { Link } from 'react-router-dom';
import { YinYang } from './AllSvgs';
import { useState } from 'react';
import Intro from './Intro';
import { motion } from 'framer-motion';
import AnimatedPageTransition from "./AnimatedPageTransition";


const MainContainer = styled.div`
background: ${props =>props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif;
  font-weight: 500;
}
`
const Container = styled.div`
padding: 2rem;
`

const Contact = styled(Link)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const PROJECTS = styled(Link)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;

@media (max-width: 50em){
right: calc(0rem + 1vw);
}   
`

const ABOUT = styled(Link)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 44%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;
`
const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`


const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition : all 1s ease;

&>:first-child{
  animation: ${rotate} infinite 2s linear
}

&>:last-child{
  display: ${props => props.click ? 'none' : 'inline-block'};
  padding-top: 1rem;
}

@media (max-width: 50em){
top: ${props => props.click ? '90%' : '50%'};
left: ${props => props.click ? '85%' : '50%'};
}  
`


const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0'};
height: ${props => props.click ? '100%' : '0'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;

`

const Main = () => {

  const [click,setClick] = useState(false);
  
  const handleClick = () => setClick(!click);


  return (
   <AnimatedPageTransition>
    <MainContainer>
      <DarkDiv click={click}/>
      <Container>
      <PowerButton/>
      <LogoComponent theme={click ? 'dark' : 'light'}/>
      <SocialIcons theme={click ? 'dark' : 'light'}/>
      
      <Center click={click}>
        <YinYang onClick={()=> handleClick()} width={click ? 90 : 150} height={click ? 90 : 150} fill='currentColor'/>
        <span>Click</span>
      </Center>

      <Contact target="_blank" to="mailto:remek6@gmail.com">
        <motion.h2
        initial={{
          y:-200,
          transition: {type:'spring', duration: 1.5, delay:1}
        }}
        animate={{
          y:0,
          transition: {type:'spring', duration:1.5, delay:1}
        }}
        whileHover={{scale: 1.2}}
        whileTap={{scale: 0.9}}
        >
          Say Hi...
        </motion.h2>
      </Contact>
      <PROJECTS to="/projects">
        <motion.h2
        initial={{
          y:-200,
          transition: {type:'spring', duration: 1.5, delay:1}
        }}
        animate={{
          y:0,
          transition: {type:'spring', duration:1.5, delay:1}
        }}
        whileHover={{scale: 1.2}}
        whileTap={{scale: 0.9}}
        >
          Projects
        </motion.h2>
      </PROJECTS>
      <ABOUT click={click} to="/about">
        <motion.h2
        initial={{
          y:-200,
          transition: {type:'spring', duration: 1.5, delay:1}
        }}
        animate={{
          y:0,
          transition: {type:'spring', duration:1.5, delay:1}
        }}
        whileHover={{scale: 1.2}}
        whileTap={{scale: 0.9}}
        >
          About
        </motion.h2>
      </ABOUT>
      </Container>
      {click ? <Intro click={click}/> : null}
    </MainContainer>
    </AnimatedPageTransition>
  )
}

export default Main