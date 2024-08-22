import styled from "styled-components";
import { device } from "styles/media";

export const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const ServiceHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    opacity: 0;

    &.mountAnimation{
        animation: 1.5s ease-in-out 0s 1 fadeUp forwards;
    }
`

export const ServiceHeaderTitle = styled.p`
    font-weight: 600;
    color: ${(props) => props.theme.palette.neutral.black};
    margin-top: 100px;

    @media ${device.mobile} {
        font-size: 35px;
        margin-bottom: 7px;
    }

    @media ${device.tablet} {
        font-size: 55px;
    }

    @media ${device.laptop} {

    }
`

export const ServiceHeaderDescription = styled.p`
    font-weight: 300;
    max-width: 970px;
    text-align: center;
    margin: 10px;
    line-height: 2;
    color: ${(props) => props.theme.palette.neutral.black};

    @media ${device.mobile} {
        margin: 0;
        width: 90%;
        font-size: 16px;
    }

    @media ${device.tablet} {

    }

    @media ${device.laptop} {
        margin: 10px;
        font-size: 15px;
    }
`

export const ServiceItemsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    opacity: 0;

    &.mountAnimation{
        animation: 1.5s ease-in-out 0s 1 fadeUp forwards;
    }

    @media ${device.mobile} {
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 50px;
    }

    @media ${device.tablet} {

    }

    @media ${device.laptop} {

    }

    @media ${device.desktop} {
        flex-direction: row;
        align-items: flex-start;
        width: 90%;
        margin-top: 0;
    }

    @media ${device.bigScreen} {
        width: 60%;
    }
`

export const ServiceItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media ${device.mobile} {
        margin: 30px 0;
    }
`

export const ServiceIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

export const ServiceIcon = styled.img`
    width: 50%;
`

export const ServiceItemTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.palette.neutral.darkGray};
    margin: 0;
`

export const ServiceItemDescription = styled.p`
    font-weight: 300;
    text-align: center;
    line-height: 1.5;

    @media ${device.mobile} {
        font-size: 16px;
        line-height: 2;
        max-width: initial;
        width: 90%;
    }

    @media ${device.tablet} {
        width: 70%;
    }

    @media ${device.laptop} {
        width: 50%;
    }

    @media ${device.desktop} {
        max-width: 350px;
        font-size: 15px;
        margin-top: 30px;
        width: 85%;
    }
`