import { styled } from "styled-components";
import { device } from "styles/media";

export const NavbarItemsList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    list-style: none;
    flex-wrap: wrap;
`

export const NavbarItemsContainer = styled.div`
    height: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavbarItem = styled.li`
    list-style: none;
    font-weight: 400;
    font-size: 18px;
    padding: 5px 20px;
    margin: 0 10px;
    cursor: pointer;
    color: ${(props) => props.theme.palette.neutral.darkGray};
    &:hover{
        color: ${(props) => props.theme.palette.neutral.gray};
    }
    transition: all 0.3s ease-in-out;

    @media ${device.mobile} {
        font-size: 18px;
    }

    @media ${device.tablet} {
        font-size: 20px;
    }
`