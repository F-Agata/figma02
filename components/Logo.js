import styled from "styled-components";

import Box from '../styles/Box'
import Link from '../styles/Link'

const Logo = (  ) => {
  
    return (
        <BoxLogo >
            <Link href={`/home`}>
                  <LogoIcon src={'logo.svg'} alt={"logo"} />
            </Link>
        </BoxLogo>
    );
};

export default Logo;

const BoxLogo = styled(Box)`
     //border: purple 2px solid;
   height: 50px;
`

const LogoIcon = styled.img`
    width: 100%;
  height: 50px;
`
