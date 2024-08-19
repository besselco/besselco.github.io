import React from "react";
import {
  FooterContainer,
  FooterLogoContainer,
  FooterLogo,
  FooterCopyRightContainer,
  FooterCopyRightText,
  FooterContactContainer,
  FooterContactItemContainer,
  FooterContactItem,
} from "./Footer.style";
import BesselLogo from "assets/images/BesselCo-Logo.png";
import { FOOTERCONTENTS } from "constants/StringConstants";

const Footer = ({ viewport }) => {
  return (
    <FooterContainer>
      <FooterLogoContainer>
        <FooterLogo src={BesselLogo} />
        <FooterCopyRightContainer>
          <FooterCopyRightText>{FOOTERCONTENTS.COPYRIGHT}</FooterCopyRightText>
        </FooterCopyRightContainer>
      </FooterLogoContainer>

      {viewport >= 768 && (
        <FooterContactContainer>
          <FooterContactItemContainer>
            <FooterContactItem>{FOOTERCONTENTS.FOOTERPHONE}</FooterContactItem>
          </FooterContactItemContainer>
          <FooterContactItemContainer>
            <FooterContactItem>{FOOTERCONTENTS.FOOTEREMAIL}</FooterContactItem>
          </FooterContactItemContainer>
          <FooterContactItemContainer>
            <FooterContactItem>
              {FOOTERCONTENTS.FOOTERADDRESS}
            </FooterContactItem>
          </FooterContactItemContainer>
        </FooterContactContainer>
      )}
    </FooterContainer>
  );
};

export default Footer;
