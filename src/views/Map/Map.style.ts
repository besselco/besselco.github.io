import styled from "styled-components";
import { device } from "styles/media";

const GoogleMap = styled.iframe`
    width: 100%;
    height: 450px;
    border: 0;
    margin: 70px 0;

    @media ${device.mobile} {
        margin: 30px 0;
        height: 250px;
        border-top: 1px solid ${(props) => props.theme.palette.neutral.gray};
        border-bottom: 1px solid ${(props) => props.theme.palette.neutral.gray};
    }

    @media ${device.tablet} {
        margin: 70px 0;
        height: 450px;
        border: 0;
    }

    @media ${device.laptop} {
        height: 350px;
    }

    @media ${device.desktop} {
        height: 450px;
    }
`

export const BreakLine = styled.hr`
    width: 70%;
    border-color: ${(props) => props.theme.palette.neutral.lightGray};
`

export default GoogleMap;