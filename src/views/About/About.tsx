import React from "react";
import {
  AboutContainer,
  AboutBanner,
  AboutBannerText,
  AboutContentContainer,
  AboutContentHeaderContainer,
  AboutContentHeaderTitle,
  AboutContentHeaderSubTitle,
  AboutContentItemContainer,
  AboutContentItemTitle,
  AboutContentItem,
  AboutBannerTextContainer,
  AboutLogoContainer,
  AboutSubLogoGroupContainer,
  AboutSubLogoContainer,
  AboutBesselLogo,
  AboutSubLogoC24,
  AboutSubLogoBDI,
  AboutSubLogoMadeca,
  AboutSubLogoWD,
} from "./About.style";
import SectionContainer from "styles/SectionContainer.style";
import { ABOUTCONTENTS } from "constants/StringConstants";
import BesselLogo from "assets/images/BesselCo-Logo.png";
import CentellianLogo from "assets/images/centellian24_logo.png";
import MadecaLogo from "assets/images/Madeca_Derma_Logo_Icon_blk.png";
import WDLogo from "assets/images/wdressroom_logo_blk1.png";
import BDILogo from "assets/images/BDI.png";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <SectionContainer>
      <AboutContainer id="about">
        <AboutBanner>
          <AboutBannerTextContainer>
            <AboutBannerText>{ABOUTCONTENTS.BANNERTEXT}</AboutBannerText>
          </AboutBannerTextContainer>
        </AboutBanner>
        <AboutContentContainer>
          <AboutContentHeaderContainer>
            <AboutContentHeaderTitle>
              {ABOUTCONTENTS.TITLE}
            </AboutContentHeaderTitle>
            <AboutContentHeaderSubTitle>
              {ABOUTCONTENTS.SUBTITLE}
            </AboutContentHeaderSubTitle>
          </AboutContentHeaderContainer>
          <AboutContentItemContainer>
            <AboutContentItemTitle>
              {ABOUTCONTENTS.CONTENT_TITLE_1}
            </AboutContentItemTitle>
            <AboutContentItem>
              {ABOUTCONTENTS.CONTENT_SUBTITLE_1}
            </AboutContentItem>
          </AboutContentItemContainer>
          <AboutContentItemContainer>
            <AboutContentItemTitle>
              {ABOUTCONTENTS.CONTENT_TITLE_2}
            </AboutContentItemTitle>
            <AboutContentItem>
              {ABOUTCONTENTS.CONTENT_SUBTITLE_2}
            </AboutContentItem>
          </AboutContentItemContainer>
        </AboutContentContainer>
      </AboutContainer>
      <AboutLogoContainer id="logo">
        <AboutBesselLogo
          ref={ref}
          className={`${inView ? "mountAnimation" : ""}`}
          src={BesselLogo}
        />
        <AboutSubLogoGroupContainer
          ref={ref}
          className={`${inView ? "mountAnimation" : ""}`}
        >
          <AboutSubLogoContainer
            target="_blank"
            href="https://www.wdressroomusa.com"
          >
            <AboutSubLogoWD src={WDLogo} />
          </AboutSubLogoContainer>

          <AboutSubLogoContainer target="_blank" href="https://www.madeca.com">
            <AboutSubLogoMadeca src={MadecaLogo} />
          </AboutSubLogoContainer>

          <AboutSubLogoContainer
            target="_blank"
            href="https://www.centellian24usa.com"
          >
            <AboutSubLogoC24 src={CentellianLogo} />
          </AboutSubLogoContainer>

          <AboutSubLogoContainer
            target="_blank"
            href="https://www.wdressroomusa.com"
          >
            <AboutSubLogoBDI src={BDILogo} />
          </AboutSubLogoContainer>
        </AboutSubLogoGroupContainer>
      </AboutLogoContainer>
    </SectionContainer>
  );
};

export default About;
