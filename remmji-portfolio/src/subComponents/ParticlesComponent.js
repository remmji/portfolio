import React from 'react'
import styled from 'styled-components'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import configDark from "../config/particlesjs-config.json"
import configLight from "../config/particlesjs-config-light.json"

const Box = styled.div`
position: absolute;
inset: 0;
z-index: 0;
`


const ParticlesComponent = (props) => {
    const particlesInit = async (main) => {
    await loadFull(main);
    }

    
  return (
    <Box>
         <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? configLight : configDark}
        init={particlesInit} 
      />
    </Box>
  )
}

export default ParticlesComponent