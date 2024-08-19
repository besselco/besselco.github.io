import { styled } from "styled-components";
import { device } from "styles/media";

export const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /* width: 100vw; */

    @media ${device.mobile} {
        height: 80px;
        box-shadow: none;
    }

    @media ${device.tablet} {
        height: 110px;
        box-shadow: 1px 0 10px 0 ${(props) => props.theme.palette.neutral.gray};
        justify-content: space-between;
    }

    @media ${device.laptop} {
        justify-content: flex-start;
    }
`

export const NavbarLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    padding: 10px 20px;
    cursor: pointer;
    margin-left: 50px;
    
    @media ${device.mobile} {
        margin-left: 15px; // Add container - width: 90%;
    }
`

export const NavbarLogoLink = styled.a`
`

export const NavbarLogo = styled.img`
    max-width: 230px;
    max-height: 40px;

    @media ${device.mobile} {
        max-width: 150px;
    }
`

export const NavbarContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`