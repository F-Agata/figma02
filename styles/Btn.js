import styled, { css } from "styled-components";
import { variant, space, position, layout } from "styled-system";

const Btn = styled.button`
  border: 2px solid transparent;
  border-radius: 8px;
  margin: 10px;
  padding: 16px 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => css`
    line-height: ${theme.lineHeight.lh6};
    font-size: ${theme.fontSizes.fs6};
    font-weight: ${theme.fontWeights.bold};
    background: ${theme.gradients.gradientBtn};
  `};
  
  ${space};
  ${position};
  ${layout};
  
  ${({ theme }) =>
    variant({
      prop: 'variant',
      variants: {
        orangeDark: {
          color: "colorWhite",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 3px rgb(232, 113, 69) ",
          '&:hover': {
            background: `${theme.colors.colorSecondary}`,
            color: "colorLight",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5), 0px 3px rgb(232, 113, 69) ",
            },
          '&:active': {
            background: `${theme.colors.colorSecondary}`,
            color: "colorLight",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5), 0px 3px rgb(232, 113, 69) ",
          },
        },
        orangeLight: {
          color: "colorWhite",
          boxShadow: "0px 4px 4px rgba(250, 120, 70, 0.25), 0px 3px rgb(232, 113, 69) ",
          '&:hover': {
            background: `${theme.colors.colorSecondary}`,
            color: "colorWhite",
            boxShadow: "0px 3px rgb(232, 113, 69), rgba(173, 135, 128, 0.5) 0px 30px 60px -12px inset, rgba(232, 113, 69, 0.5) 0px 18px 36px -18px inset",
          },
          '&:active': {
            background: `${theme.colors.colorSecondary}`,
            color: "colorWhite",
            boxShadow: "0px 3px rgb(232, 113, 69), rgba(173, 135, 128, 0.5) 0px 30px 60px -12px inset, rgba(232, 113, 69, 0.5) 0px 18px 36px -18px inset",
          },
        },
      },
    })
  }
`
export default Btn

// box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
