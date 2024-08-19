import styled from "styled-components";
import { device } from "styles/media";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;

    @media ${device.mobile} {
        flex-direction: column;
        justify-content: center;
        min-height: 200px;
    }

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: space-evenly;
        min-height: 370px;
    }
`

export const FooterLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    @media ${device.mobile} {
        justify-content: center;
        align-items: center;
    }

    @media ${device.tablet} {
        justify-content: center;
        align-items: flex-start;
    }
`

export const FooterLogo = styled.img`

    @media ${device.mobile} {
        width: 200px;
    }

    @media ${device.tablet} {
        width: 254px;
    }
`

export const FooterCopyRightContainer = styled.div`
    width: 100%;
`

export const FooterCopyRightText = styled.p`
    font-weight: 200;

    @media ${device.mobile} {
        font-size: 12px;
    }

    @media ${device.tablet} {
        font-size: 13px;
    }
`

export const FooterContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const FooterContactItemContainer = styled.div``

export const FooterContactItem = styled.p`
    font-size: 15px;
    font-weight: 200;
`