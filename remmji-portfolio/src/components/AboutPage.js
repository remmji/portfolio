import React from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes'
import styled, {keyframes} from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticlesComponent from '../subComponents/ParticlesComponent'
import astronaut from '../assets/Images/spaceman.png'



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
img{
  width: 100%;
  height: auto;
}
`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`


const AboutPage = () => {
  return (


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
         I started my coding journey about six months ago, and since then, I've been fully immersed in learning everything I can about front-end development.
      </Main>
    </Box>
    </ThemeProvider>

  )
}

export default AboutPage