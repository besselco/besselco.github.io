import styled from "styled-components";
import { device } from "styles/media";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media ${device.mobile} {
        width: 95%;
    }

    @media ${device.tablet} {
        /* width: 90%; */
    }

    @media ${device.laptop} {

    }

    @media ${device.desktop} {
        width: 90%;
    }
`

export const AboutBanner = styled.div`
    height: 72px;
    background-color: ${(props) => props.theme.palette.primary[300]};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @keyframes expandWidth {
        0% {
            width: 10%;
            opacity: 0;
        }
        100% {
            width: 100%;
            opacity: 1;
        }
    }

    animation: 1.5s ease-in-out 0s 1 expandWidth;

    @media ${device.mobile} {
        height: 60px;
    }

    @media ${device.tablet} {
        height: 72px;
    }
`

export const AboutBannerTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    min-width: 200px;

    @media ${device.mobile} {
        width: 90%;
    }

    @media ${device.tablet} {
        /* width: 50%; */
    }

    @media ${device.laptop} {

    }

    @media ${device.desktop} {
        /* width: 50%; */
    }

    @media ${device.bigScreen} {
        width: 50%;
    }
`

export const AboutBannerText = styled.p`
    font-size: 25px;
    font-weight: 500;
    color: ${(props) => props.theme.palette.neutral.lightGray};
`

export const AboutContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    @keyframes fadeUp {
        0% {
            opacity: 0;
            transform: translateY(10vh);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    animation: 1.5s ease-in-out 0s 1 fadeUp;

    @media ${device.mobile} {
        flex-direction: column;
        width: 90%;
        /* margin-left: 40px; */
        margin-top: 50px;
    }

    @media ${device.tablet} {
        width: 50%;
    }

    @media ${device.laptop} {
        margin-top: 60px;
        flex-direction: row;
        width: 90%;
    }

    @media ${device.desktop} {
    }

    @media ${device.bigScreen} {
        margin-top: 120px;
        width: 50%;
    }

`

export const AboutContentHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 200px;

    @media ${device.laptop} {
        padding-right: 20px;
    }

    @media ${device.desktop} {
    }
`

export const AboutContentHeaderTitle = styled.p`
    font-weight: 600;
    margin: 0;
    color: ${(props) => props.theme.palette.neutral.black};

    @media ${device.mobile} {
        font-size: 25px;
    }

    @media ${device.tablet} {
        font-size: 35px;
    }

    `

export const AboutContentHeaderSubTitle = styled.p`
    font-size: 16px;
    font-weight: 300;
    margin: 0;
`

export const AboutContentItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media ${device.mobile} {
        min-width: 200px;
        width: 100%;
        margin-top: 50px;
    }

    @media ${device.laptop} {
        min-width: 375px;
        width: 410px;
        margin-top: 0;
    }
`

export const AboutContentItemTitle = styled.p`
    font-size: 25px;
    font-weight: 600;
    margin: 0;
    color: ${(props) => props.theme.palette.neutral.black};
`

export const AboutContentItem = styled.p`
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;

    @media ${device.mobile} {
        margin-top: 7px;
    }

    @media ${device.tablet} {
        /* margin-top: 55px; */
    }

    @media ${device.laptop} {
        margin-top: 55px;
        padding-right: 20px;
    }
`

export const AboutLogoContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media ${device.mobile} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 90%;
    }

    @media ${device.laptop} {
        width: 70%;
    }

    @media ${device.desktop} {
        width: 90%;
    }
    
`

export const AboutSubLogoGroupContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    opacity: 0;

    &.mountAnimation{
        animation: 1.5s ease-in-out 0s 1 fadeUp forwards;
    }

    @media ${device.mobile} {
        flex-direction: column;
        min-height: 500px;
        align-items: center;
    }

    @media ${device.tablet} {
        display:grid;
        grid-template-columns: 50% 50%;
        grid-row: auto auto;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }

    @media ${device.laptop} {

    }

    @media ${device.desktop} {
        display: flex;
        justify-content: space-evenly;
        margin-top: 30px;
        flex-direction: row;
        min-height: 150px;
    }
`

export const AboutSubLogoContainer = styled.a`
    padding: 10px;
    cursor: pointer;
    min-width: 290px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobile} {
        min-height: 100px;
    }

    @media ${device.tablet} {
        min-height: initial;
    }

    @media ${device.laptop} {
        min-width: 350px;
        min-height: 100px;
    }

    @media ${device.desktop} {
        min-width: 290px;
        min-height: initial;
    }
`

export const AboutBesselLogo = styled.img`
    max-width: 1150px;
    padding: 50px;
    opacity: 0;
    &.mountAnimation{
        animation: 1.5s ease-in-out 0s 1 fadeUp forwards;
    }

    @media ${device.mobile} {
        width: 90%;
        padding: 50px 0;
    }

    @media ${device.tablet} {
        padding: 50px;
        width: 100%;
    }
`

export const AboutSubLogo = styled.img`

    transition: all 0.3s ease-in-out;

    @media ${device.mobile} {
        width: 50%;
        &:hover {
            width: 60%;
        }
    }

    @media ${device.tablet} {
        width: 256px;
    &:hover{
        width: 290px;
    }
    }
`
export const AboutSubLogoResize = styled.img`
    &:hover{
        width: 150px;
    }
    transition: all 0.3s ease-in-out;

    @media ${device.mobile} {
        width: 100px;
    }

    @media ${device.tablet} {
        width: 120px;
    }
`