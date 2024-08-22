import { styled } from "styled-components";
import { device } from "styles/media";
import { Link } from 'react-scroll';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
        align-items: center;
        height: 50vh;
    }

    @media ${device.tablet} {
        align-items: center;
        height: 65vh;
    }

    @media ${device.laptop} {
        height: 75vh;
    }

    @media ${device.desktop} {
        height: 65vh;
    }
`

export const HomeContentContainer = styled.div`
    @media ${device.mobile} {
        /* margin-left: 25px; */
        width: 85%;
        margin-left: 0;
    }
`

export const HomeHeaderContainer = styled.div`
`

export const HomeHeaderText = styled.p`
    font-family: "Poppins";
    font-size: 65px;
    font-weight: 600;
    margin: 0;
    color: ${(props) => props.theme.palette.neutral.black};

    @media ${device.mobile} {
        font-size: 35px;
    }

    @media ${device.tablet} {
        font-size: 55px;
    }
`

export const HomeDescriptionContainer = styled.div`
    max-width: 700px;
    line-height: 1.5;
`

export const HomeDescriptionText = styled.p`
    font-family: "Poppins";
    font-size: 23px;
    font-weight: 300;
    margin-top: 20px;
    margin-bottom: 50px;
    line-height: 1.7;

    @media ${device.mobile} {
        font-size: 15px;
        margin-top: 7px;
    }

    @media ${device.tablet} {
        font-size: 20px;
    }
`

export const HomeLinkContainer = styled.div`


`

export const HomeLinkText = styled(Link)`
    font-family: "Poppins";
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.palette.primary[300]};
    text-decoration: underline;
    padding: 20px 0;
    cursor: pointer;
`