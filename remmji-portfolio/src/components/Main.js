import React from 'react'
import styled from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { Link } from 'react-router-dom';

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
`

const ABOUT = styled(Link)`
color: ${props => props.theme.text};
position: absolute;
top: 44%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: center;
`

const SKILLS = styled(Link)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const Main = () => {
  return (
    <MainContainer>
      <Container>
      <PowerButton/>
      <LogoComponent/>
      <SocialIcons/>

      <Contact target="_blank" to="mailto:remek6@gmail.com">
        <h2>
          Say Hi...
        </h2>
      </Contact>
      <PROJECTS to="/projects">
        <h2>
          Projects
        </h2>
      </PROJECTS>
      <ABOUT to="/about">
        <h2>
          About
        </h2>
      </ABOUT>
      <BottomBar>
      <SKILLS to="/skills">
        <h2>
          My Skills
        </h2>
      </SKILLS>
      </BottomBar>

      </Container>
    </MainContainer>
  )
}

export default Main