
import styled, { css } from "styled-components";


import Box from "../../../styles/Box";
import Btn from "../../../styles/Btn"
import Link from "../../../styles/Link"
import TitleAndText from "../../../styles/TitleAndText"

const HomeBig = () => {


    return (
        <Box
            // border={'green 2px solid'}
            // height={'100vh'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            alignItems={'strench'}
        >
            <BgxBg>
              <Box width={"100%"}
              maxWidth={1140}
              p={'0px 20px'}
              m={"0 auto"}
                   display={'flex'}
                   justifyContent={'space-between'}
                   alignItems={'stretch'}
              >

                <Box
                    width={{_: '40%', tabletL: '40%', laptopS: '40%' }}
                    border={'pink 2px solid'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'flex-start'}
                    p={{_: '100px 20px 20px 20px', tabletL: '100px 20px 20px 20px', laptopS: '100px 20px 20px 20px' }}

                >
                    <TitleAndText variant={"title3"}  textAlign={'left'} m={"10px 0 20px 0"}> <TitleAndText as="span"   color={'colorSecondary'}>Lorem ipsum</TitleAndText> dolor sit amet</TitleAndText>
                    <TitleAndText variant={"textSmallBold"}  textAlign={'left'} mb={20}><TitleAndText as="span"  color={'colorSecondary'}>Donec luctus tortor</TitleAndText>  consectetur adipiscing elit. Suspendisse massa.                    </TitleAndText>
                    <TitleAndText variant={"textSmallBold"}  textAlign={'left'} mb={20}><TitleAndText as="span"   color={'colorSecondary'}>Mauris vel </TitleAndText> nulla vitae odio</TitleAndText>
                    <TitleAndText variant={"textSmallBold"}  textAlign={'left'} mb={20}><TitleAndText as="span"   color={'colorSecondary'}>Nunc ac mattis</TitleAndText>  libero, non rhoncus erat. Sed</TitleAndText>
                    <Box
                        // border={'yellow 2px solid'}
                        width={"60%"}
                        p={'0 0px'}
                    >
                        <Link href={`/#`}>
                            <Btn variant="orangeDark"  m={'20px 0px 40px 0'} width={"100%"}> More...</Btn>
                        </Link>
                    </Box>
                </Box>

                <Box
                    width={{_: '60%', tabletL: '50%', laptopS: '50%' }}
                    border={'yellow 2px solid'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'flex-end'}
                    p={{_: '120px 0px 42px 0px', tabletL: '120px 0px 45px 0px', laptopS: '120px 0px 50px 0px', }}
                >
                    <HeaderImg src={'home/womenWithPaintingBig01.png'} alt={"photo"} />
                </Box>

                <BoxWrappOrnament>
                    <OrnamentImg src={' ornament.png'} alt={"photo"} />
                    <BoxWrappTextInsideOrnament>

                        <TitleAndText
                            variant={{_: 'textSmallVery', tabletL: 'textSmall', }}
                            textAlign={'center'}
                            // pb={{_: '0', mobileL: '10px', }}
                        >Lorem ipsum</TitleAndText>
                        <TitleAndText
                            variant={{_: 'textSmallVery', tabletL: 'textSmall', }}
                            textAlign={'center'} color={'colorSecondary'}> consectetur ac mattist</TitleAndText>
                    </BoxWrappTextInsideOrnament>
                </BoxWrappOrnament>

                <BoxWrappArrow>
                    <ArrowImg src={'arrowTwisting02.png'} alt={"arrow"} />
                </BoxWrappArrow>

                <BoxWrappGift>
                    <GiftImg src={'gift.png'} alt={"gift"} />
                </BoxWrappGift>

                <BoxWrappTxt>
                    <TitleAndText variant={'textSmall'}  textAlign={'center'}color={'colorSecondary'}>Lorem ipsum</TitleAndText>
                    <TitleAndText variant={'textSmall'} textAlign={'center'}> consectetur adipiscing elit</TitleAndText>
                </BoxWrappTxt>
              </Box>
            </BgxBg>
        </Box>
    );
}

export default HomeBig;

const BgxBg = styled(Box)`
  width: 100%;
    //border: 2px burlywood solid;
  background-image: url('bg1.png');
  background-repeat: no-repeat;
   background-size: cover;
  background-position: center;
  //padding-top: 140px;  
  padding-bottom: 0px;
  position: relative;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
`

const HeaderImg = styled.img`
   //border: 2px solid blueviolet;
width: 100%;
 `

const BoxWrappArrow = styled(Box)`
   //border: yellow 2px solid;
  position: absolute;
  width: 10%;
  top: 28%;
  left: 50%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 10%;
    top: 24%;
    left: 50%;
  }
`

const ArrowImg = styled.img`
width: 100%
`

const BoxWrappGift = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 10%;
  top: 13%;
  left: 36%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 10%;
    top: 10%;
    left: 35%;
  }
`

const GiftImg = styled.img`
  width: 100%
`

const BoxWrappOrnament = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 18%;
  top: 13%;
  right: -8%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 1024px) {
    width: 10%;
    top: 14%;
    right: -8%;
  }
  //@media (min-width: 1140px) {
  //  width: 35%;
  //}
  `

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 70%;
  //border: yellow 2px solid;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  //@media (min-width: 1024px) {
  //  width: 20%;
  //  top: 24%;
  //  left: 30%;
  //}
  //@media (min-width: 1140px) {
  //  top: 18%;
  //    }
`

const OrnamentImg = styled.img`
  width: 100%
`

const BoxWrappTxt = styled(Box)`
    //border: yellow 2px solid;
  position: absolute;
  width: 20%;
 top: 15%;
  left: 54%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 1024px) {
    width: 20%;
    top: 24%;
    left: 30%;
  }
  //@media (min-width: 1140px) {
  //  width: 42%;
  //  top: 30%;
  //}
`
