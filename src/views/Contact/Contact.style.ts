import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from "styles/media";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    @media ${device.mobile} {
        margin-top: 50px;
    }

    @media ${device.tablet} {

    }

    @media ${device.laptop} {
        padding-top: 100px;
        margin-top: 0px;
    }
`

export const ContactTitleContainer = styled.div`

    @media ${device.mobile} {
        width: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media ${device.tablet} {
    }

    @media ${device.laptop} {
        display: initial;
        width: 85%;
    }

    @media ${device.desktop} {
    }

    @media ${device.bigScreen} {
        width: 35%;
    }
`

export const ContactTitleText = styled.p`
    font-weight: 600;
    color: ${(props) => props.theme.palette.neutral.black};
    margin-bottom: 10px;

    @media ${device.mobile} {
        font-size: 35px;
    }

    @media ${device.tablet} {
        font-size: 55px;
    }

    @media ${device.laptop} {

    }
`

export const ContactContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media ${device.mobile} {
        flex-direction: column;
        align-items: center;
        width: 85%;
    }

    @media ${device.tablet} {
        margin-top: 30px;
    }

    @media ${device.laptop} {
        flex-direction: row;
        align-items: flex-start;
        width: 70%;
    }

    @media ${device.desktop} {
        width: 45%;
    }

    @media ${device.bigScreen} {
        width: 35%;
    }
`

export const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media ${device.laptop} {
        padding-right: 40px;
    }
`

export const ContactInfoItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media ${device.mobile} {
        padding: 5px 0;
    }

    @media ${device.tablet} {

    }

    @media ${device.laptop} {
        padding: 10px 0;
    }
`

export const ContactInfoIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContactInfoIcons = styled(FontAwesomeIcon)`
    font-size: 25px;
    padding: 0 25px 0 0;
    text-align: center;
    min-width: 25px;
`
export const SocialIcons = styled(FontAwesomeIcon)`
    font-size: 35px;
    margin: 0 15px;
    text-align: center;
    width: 50px;
    cursor: pointer;
    &:hover{
        font-size: 50px;
    }
    transition: all 0.3s ease-in-out;
`

export const SocialIconsLink = styled.a``

export const ContactInfoText = styled.p`
    font-weight: 300;

    @media ${device.mobile} {
        font-size: 15px;
    }

    @media ${device.tablet} {
        font-size: 17px;
    }
`

export const ContactMailtoLink = styled.a`
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.palette.neutral.lightGray};
    font-weight: 300;
    color: ${(props) => props.theme.palette.neutral.darkGray};
    &:hover{
        color: ${(props) => props.theme.palette.neutral.grayHover};
        text-decoration-color: ${(props) => props.theme.palette.neutral.grayHover};
        text-decoration: underline;
    }
    transition: all 0.3s ease-in-out;

    @media ${device.mobile} {
        font-size: 16px;
    }

    @media ${device.tablet} {
        font-size: 18px;
    }

`

export const ContactFormContainer = styled.div`
    min-width: 400px;

    @media ${device.mobile} {
        min-width: initial;
        width: 90%;
        margin-top: 30px;
    }

    @media ${device.tablet} {
        min-width: 400px;
        width: auto;
    }

    @media ${device.laptop} {
        margin-top: 0;
    }
`

export const ContactFormTemplate = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

export const ContactFormNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const ContactFormLabel = styled.label`
    color: ${(props) => props.theme.palette.neutral.darkGray};
    margin-left: 5px;
`

export const ContactFormLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 10px 0;

    @media ${device.mobile} {
    }

    @media ${device.tablet} {
    }
`

export const ContactFormInput = styled.input`
    width: 100%;
    max-width: 380px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.palette.neutral.lightGrayHover};
    margin: 5px 0;
    padding: 0 10px 0 10px;

    @media ${device.mobile} {
        width: 90%;
    }

    @media ${device.tablet} {
        width: 100%;
    }
`
export const ContactFormNameInput = styled.input`
    width: 100%;
    max-width: 170px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.palette.neutral.lightGrayHover};
    margin: 5px 0;
    padding: 0 10px 0 10px;

    @media ${device.mobile} {
        max-width: 380px;
        width: 90%;
    }

    @media ${device.tablet} {
        max-width: 170px;
        width: 100%;
    }
`

export const ContactFormButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0.7rem 1.25rem;
  font-weight: 400;
  text-align: center;
  background-color: ${(props) => props.theme.palette.neutral.lightGrayHover};
  color: ${(props) => props.theme.palette.neutral.darkGray};
  background-position: center;
  transition: background 0.8s;
  border-radius: 0.5em;
  outline: 0;
  border: none;
  font-size: 1rem;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
 
  &:hover {
    background: ${(props) => props.theme.palette.neutral.lightGrayButton}
      radial-gradient(
        circle,
        transparent 1%,
        ${(props) => props.theme.palette.neutral.lightGrayButton} 1%
      )
      center/15000%;
  }
  &:active {
    background-color: ${(props) => props.theme.palette.neutral.lightGray};
    transition: background-color 0.5s ease-out;
    background-size: 100%;
    /* transition: background 0s; */
    transform: scale(0.95);
    transition: transform 0.1s;
  }
`