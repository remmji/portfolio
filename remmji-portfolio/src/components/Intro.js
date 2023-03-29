import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/profile-img.png'
import {motion} from 'framer-motion'


const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

@media (max-width: 80em){
width: 70vw;
}
@media (max-width: 30em){
width: 66vw;
}


width: 64vw;
height: 55vh;
display: flex;

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;    
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};

    z-index: 1;
`



const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 64%;
    height: auto;

@media (max-width: 70em){
width:70%;
}

@media (max-width: 60em){
width:70%;
}

@media (max-width: 55em){
width:90%;
}

@media (max-width: 45em){
width:110%;
}
@media (max-width: 30em){
width:110%;
}   

}

`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
}

@media (max-width: 22em){
font-size: calc(0.4em + 1.4vw);
&>*:last-child{
    font-size: calc(0.4rem + 1.5vw);
}
}

`



const Intro = () => {
  return (
    <Box
    initial={{height:0}}
    animate={{height:'55vh'}}
    transition={{type: 'spring', duration:2, delay:1}}
    >
        <SubBox>
            <Text>
                <h1>Hi,</h1>
                <h3>My name is Remek.</h3>
                <h6>I am junior React Developer.</h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:1, delay:2}}>
                <img className='pic' src={Me} alt="Profile Picture" />
            </motion.div>
        </SubBox>
    </Box>
  )
}

export default Intro
