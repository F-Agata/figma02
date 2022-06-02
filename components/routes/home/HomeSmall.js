
import styled, { css } from "styled-components";


import Box from "../../../styles/Box";
import Btn from "../../../styles/Btn"
import Link from "../../../styles/Link"
import TitleAndText from "../../../styles/TitleAndText"

const HomeSmall = () => {

    return (
        <Box
            border={'green 2px solid'}

            // height={'100vh'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            alignItems={'strench'}
        >
            <BgxBg>
                <Box
                    // border={'yellow 2px solid'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    // pb={"10px"}
                >
                   <HeaderImg src={'home/womenWithPaintingSmall01.png'} alt={"photo"} />
                </Box>

                <BoxWrappOrnament>
                    <OrnamentImg src={' ornament.png'} alt={"photo"} />
                    <BoxWrappTextInsideOrnament>
                        <TitleAndText variant={'textSmallVery'}  textAlign={'center'}>Lorem ipsum</TitleAndText>
                        <TitleAndText variant={'textSmallVery'} textAlign={'center'} color={'colorSecondary'}> consectetur ac mattist</TitleAndText>
                    </BoxWrappTextInsideOrnament>
                </BoxWrappOrnament>

                <BoxWrappArrow>
                    <ArrowImg src={'home/arrowTwisting01.png'} alt={"photo"} />
                </BoxWrappArrow>

                <BoxWrappGift>
                    <GiftImg src={'gift.png'} alt={"photo"} />
                </BoxWrappGift>

                <BoxWrappTxt>
                    <TitleAndText variant={'textSmall'}  textAlign={'center'}color={'colorSecondary'}>Lorem ipsum</TitleAndText>
                    <TitleAndText variant={'textSmall'} textAlign={'center'}> consectetur adipiscing elit</TitleAndText>
                </BoxWrappTxt>

            </BgxBg>

            <Box
                // height={{_: '50% ', mobileL: '35%', }}

                border={'pink 2px solid'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                p={'0 20px'}
            >
                <TitleAndText variant={"title3"}  textAlign={'center'} m={"100px 0 20px 0"}> <TitleAndText as="span"   color={'colorSecondary'}>Lorem ipsum</TitleAndText> dolor sit amet</TitleAndText>
                <TitleAndText variant={"textSmallBold"}  textAlign={'center'} mb={20}><TitleAndText as="span"  color={'colorSecondary'}>Donec luctus tortor</TitleAndText>  consectetur adipiscing elit. Suspendisse massa.

                </TitleAndText>
                <TitleAndText variant={"textSmallBold"} textAlign={'center'} mb={20}><TitleAndText as="span"   color={'colorSecondary'}>Mauris vel </TitleAndText> nulla vitae odio</TitleAndText>
                <TitleAndText variant={"textSmallBold"}  textAlign={'center'} mb={20}><TitleAndText as="span"   color={'colorSecondary'}>Nunc ac mattis</TitleAndText>  libero, non rhoncus erat. Sed</TitleAndText>
                <Box
                    // border={'yellow 2px solid'}
                    width={"100%"}
                p={'0 20px'}>
                    <Link href={`/freeTrial`}>
                        <Btn variant="orangeDark"  m={'40px 0'} width={"100%"}> More...</Btn>
                    </Link>
                </Box>
            </Box>

        </Box>
    );
}

export default HomeSmall;

const BgxBg = styled(Box)`
    //border: 2px burlywood solid;
  background-image: url('bg2.png');
  background-repeat: no-repeat;
   background-size: cover;
  padding-top: 200px;  
  padding-bottom: 30px;
  position: relative;
  
`

const HeaderImg = styled.img`
  // border: 2px solid blueviolet;
width: 80%;
 
`

const BoxWrappArrow = styled(Box)`
   //border: yellow 2px solid;
  position: absolute;
  width: 30%;
  top: 30%;
  left: 20%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 35%;
    top: 10%;
    left: 10%;
  }
`

const ArrowImg = styled.img`
width: 100%
`

const BoxWrappGift = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 20%;
  top: 20%;
  left: 20%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 25%;
    top: 10%;
    left: 10%;
  }
`

const GiftImg = styled.img`
  width: 100%
`

const BoxWrappOrnament = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 40%;
  bottom: -15%;
  left: 52%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 568px) {
    width: 35%;
  }
  `

const BoxWrappTextInsideOrnament = styled(Box)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
`

const OrnamentImg = styled.img`
  width: 100%
`

const BoxWrappTxt = styled(Box)`
   //border: yellow 2px solid;
  position: absolute;
  width: 40%;
  bottom: -25%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
`
