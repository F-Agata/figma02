import React  from "react";
import styled, { css } from "styled-components";

import Box from "../styles/Box";
import Btn from "../styles/Btn"
import Link from "../styles/Link"

const Home = () => {

    return (
        <Box border={'green 2px solid'}>
          <BgxBg border={'green 2px solid'}
              pt={100}
          overflow={'hidden'}>
              <Box border={'yellow 2px solid'}
                   display={'flex'}
                   justifyContent={'center'}
                   alignItems={'center'}
                   mt={40}
              >
                  <HeaderImg src={'home/womenWithPaintingSmall.png'} alt={"photo"} />
              </Box>
         </BgxBg>
            <Box >
                <ArrowImg src={'arrowTwisting.png'} alt={"photo"} />
            </Box>
            <Box >
                <GiftImg src={'gift.png'} alt={"photo"} />
            </Box>
            <Box >
                <OrnamentImg src={' ornament.png'} alt={"photo"} />
            </Box>

            <Link href={`/freeTrial`}>
                <Btn variant="orangeDark"  ml={0}> More...</Btn>
            </Link>

            
        </Box>
    );
}

export default Home;

const BgxBg = styled(Box)`
  background-image: url('bg2.png');
  background-repeat: no-repeat;
  background-size: 100%;
   @media (min-width: 768px) {
    background-image: url('bg1.png');
  }
`

const HeaderImg = styled.img`
width: 80%
`

const ArrowImg = styled.img`
width: 100%
`

const GiftImg = styled.img`
  width: 100%
`

const OrnamentImg = styled.img`
  width: 100%
`

