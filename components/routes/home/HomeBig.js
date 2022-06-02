
import styled, { css } from "styled-components";


import Box from "../../../styles/Box";
import Btn from "../../../styles/Btn"
import Link from "../../../styles/Link"
import TitleAndText from "../../../styles/TitleAndText"

const HomeBig = () => {



    return (
        <Box
            border={'green 2px solid'}
        >
            <BgxBg
                // border={'green 2px solid'}
                pt={100}
                overflow={'hidden'}>
                <Box
                    // border={'yellow 2px solid'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    mt={40}
                >
                    <HeaderImg src={'home/womenWithPaintingBig01.png'} alt={"photo"} />
                </Box>

                <Box
                    // border={'yellow 2px solid'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <TitleAndText variant={"title3"}  textAlign={'center'} > <TitleAndText as="span"   color={'colorSecondary'}>Lorem ipsum</TitleAndText> dolor sit amet</TitleAndText>
                    <TitleAndText variant={"textSmallBold"}  textAlign={'center'} ><TitleAndText as="span"  color={'colorSecondary'}>Donec luctus tortor</TitleAndText>  consectetur adipiscing elit. Suspendisse massa.

                    </TitleAndText>
                    <TitleAndText variant={"textSmallBold"} textAlign={'center'} ><TitleAndText as="span"   color={'colorSecondary'}>Mauris vel </TitleAndText> nulla vitae odio</TitleAndText>
                    <TitleAndText variant={"textSmallBold"}  textAlign={'center'} ><TitleAndText as="span"   color={'colorSecondary'}>Nunc ac mattis</TitleAndText>  libero, non rhoncus erat. Sed</TitleAndText>

                </Box>
                <Box
                    // border={'yellow 2px solid'}
                    width={"100%"}>
                    <Link href={`/freeTrial`}>
                        <Btn variant="orangeDark"  m={'40px 0'} width={"100%"}> More...</Btn>
                    </Link>
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



        </Box>
    );
}

export default HomeBig;

const BgxBg = styled(Box)`
  background-image: url('bg2.png');
  background-repeat: no-repeat;
  //background-size: 100%;
  background-size: cover;
   @media (min-width: 768px) {
    background-image: url('bg1.png');
     background-size: cover;
   
  }
`

const HeaderImg = styled.img`
  border: 2px solid blueviolet;
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

