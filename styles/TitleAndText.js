import styled, { css }  from "styled-components";
import { variant, color, space, typography } from 'styled-system';


const TitleAndText = styled.p`
    text-decoration: none;
    font-family:  'Montserrat', sans-serif;
    ${({ theme })=>css`
        color: ${theme.colors.colorPrimary};
    `};
    ${color};
    ${space};
    ${typography};
    ${
      variant ({
          variants: {
              title1: {
                  fontSize: "fs1",
                  lineHeight: "lh1",
                  fontWeight: "fontRegular",
                },
              title2: {
                  fontSize: "fs2",
                  lineHeight: "lh2",
                  fontWeight: "fontRegular"
              },
              title3: {
                  fontSize: "fs3",
                  lineHeight: "lh3",
                  fontWeight: "fontRegular"
              },
              title4: {
                  fontSize: "fs4",
                  lineHeight: "lh4",
                  fontWeight: "fontBold"
              },
            textLarge: {
              fontSize: "fs5",
              lineHeight: "lh5",
              fontWeight: "fontBold"
            },
            textMiddle: {
              fontSize: "fs6",
              lineHeight: "lh6",
              fontWeight: "fontRegular",
            },
              textSmall: {
                 fontSize: "fs7",
                 lineHeight: "lh7",
                 fontWeight: "fontRegular"
            },
            textSmallBold: {
              fontSize: "fs7",
              lineHeight: "lh7",
              fontWeight: "fontBold"
            },
            textSmallVery: {
              fontSize: "fs8",
              lineHeight: "lh8",
              fontWeight: "fontRegular"
            },
                       
          }
      })
    };
`;

export default TitleAndText;