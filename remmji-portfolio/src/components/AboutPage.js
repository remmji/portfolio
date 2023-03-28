import React from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticlesComponent from '../subComponents/ParticlesComponent'




const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`


const AboutPage = () => {
  return (


    <ThemeProvider theme={darkTheme}>
    <Box>
      <LogoComponent theme='dark'/>
      <SocialIcons theme='dark'/>
      <PowerButton />
      <ParticlesComponent theme='dark'/>
    </Box>
    </ThemeProvider>

  )
}

export default AboutPage