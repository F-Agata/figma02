import styled, { css } from "styled-components";

import Box from "./Box"


const BoxIcon = styled(Box)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;
    
  :hover  {
    transform: scale(1.3, 1.3);
  }
  `

export default BoxIcon;
