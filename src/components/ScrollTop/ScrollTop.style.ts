import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
    showGoTop: string
}

export const ScrollButtonContainer = styled.div<IProps>`
    width: 50px;
    height: 50px;
    ${(props) => props.showGoTop==="goTopHidden" ? css`display: none;` : css`display: block; background: transparent`}
`

export const ScrollButton = styled.button<IProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    box-shadow: 1px 1px 3px ${(props) => props.theme.palette.neutral.grayHover};
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 3px solid ${(props) => props.theme.palette.primary[300]} !important;
    bottom: 5%;
    right: 5%;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    border-color: ${(props) => props.theme.palette.primary[300]};
    background-color: ${(props) => props.theme.palette.neutral.lightGray};
    transition: 0.3s all ease-in-out;
    &:hover {
        transform: scale(1.15);
    }
    
    &:active {
        background-color: ${(props) => props.theme.palette.neutral.lightGrayHover};
        transform: scale(0.85);
    }
`

export const ScrollIcon = styled(FontAwesomeIcon)`
        width: 30px;
        height: 30px;
        bottom: 5%;
        right: 5%;
        cursor: pointer;
        text-align: center;
        line-height: 30px;
        color: ${(props) => props.theme.palette.primary[300]};
`