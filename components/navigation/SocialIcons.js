import styled, { css } from "styled-components";

import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

import Box from "../../styles/Box";
import BoxIcon from '../../styles/BoxIcon';
import Link from "../../styles/Link";

const SocialIcons = ( {changeNav, bigMenu }  ) => {
    console.log("bigMenu", bigMenu)

    return (
        <BoxWrappSocialIcons bigMenu={bigMenu}>
            <Link href={`/#`} onClick={changeNav}><BoxIcon  width={40} height={40} bg={'colorBtn2'} ><StyledFaFacebook/></BoxIcon></Link>
            <Link href={`/#`} onClick={changeNav}> <BoxIcon  width={40} height={40} bg={'colorBtn2'} ml={10}> <StyledFaTwitter/></BoxIcon></Link>
            <Link href={`/#`} onClick={changeNav}> <BoxIcon   width={40} height={40} bg={'colorBtn2'} ml={10}><StyledFaInstagram/></BoxIcon></Link>
        </BoxWrappSocialIcons>
    );
};

export default SocialIcons;

const BoxWrappSocialIcons = styled(Box)`
//border: blueviolet 2px solid;
 max-width: ${(props) => props.bigMenu ? "160px" : "300px"};
padding: 0 10px 0 20px;
width: 100%;
align-self: flex-end;
display: flex;
justify-content: space-between;
`

const StyledFaFacebook = styled(FaFacebook)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorBtn2};
    color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs7};
   `};
`

const StyledFaTwitter = styled(FaTwitter)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorBtn2};
    color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs7};
   `};
`

const StyledFaInstagram = styled(FaInstagram)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorBtn2};
    color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs7};
   `};
`

