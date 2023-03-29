import React from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes'
import styled, {keyframes} from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticlesComponent from '../subComponents/ParticlesComponent'
import astronaut from '../assets/Images/spaceman.png'
import AnimatedPageTransition from "./AnimatedPageTransition";


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`

const float = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateY(15px) translateX(15px)}
  100% {transform: translateY(-10px)}
`;

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
z-index: 10;
img{
  width: 100%;
  height: auto;
}
`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 54vw;
  height: 66vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.5rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 8rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`


const AboutPage = () => {
  return (

    <AnimatedPageTransition>
    <ThemeProvider theme={darkTheme}>
    <Box>
      <LogoComponent theme='dark'/>
      <SocialIcons theme='dark'/>
      <PowerButton />
      <ParticlesComponent theme='dark'/>
      <Spaceman>
        <img src={astronaut} alt="spaceman" />
      </Spaceman>
      <Main>
        Hi there, I'm Remy, a self-taught front-end developer from Poland with a passion for creating beautiful and responsive web applications.
        <br/><br/>
         I started my coding journey about six months ago, and since then, I've been fully commited in learning everything I can about front-end development.
         <br/><br/>
         Outside of coding, I'm passionate about a few things that help me unwind and stay balanced. I love Brazilian Jiu-Jitsu (BJJ), the physical and mental challenge of training and competing in this martial art. I'm also a reader, particularly of fantasy books. When I'm not on the mat or reading, you can often find me enjoying a good TV series or running outside, both of which give me a chance to disconnect from technology and connect with nature.
      </Main>
    </Box>
    </ThemeProvider>
    </AnimatedPageTransition>
  )
}

export default AboutPage