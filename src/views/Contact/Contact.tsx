import React from "react";
import {
  ContactContainer,
  ContactTitleContainer,
  ContactTitleText,
  ContactInfoContainer,
  ContactInfoItemContainer,
  ContactInfoIconContainer,
  ContactInfoText,
  ContactFormContainer,
  ContactContentContainer,
  ContactInfoIcons,
  // SocialIcons,
  ContactMailtoLink,
  // SocialIconsLink,
} from "./Contact.style";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  // faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

// import {
//   faSquareFacebook,
//   faSquareTwitter,
//   faLinkedin,
//   faSquareInstagram,
// } from "@fortawesome/free-brands-svg-icons";
import { CONTACTCONTENTS } from "constants/StringConstants";
import ContactForm from "./ContactForm";

const Contact = ({ viewport }) => {
  return (
    <ContactContainer id="contact">
      <ContactTitleContainer>
        <ContactTitleText>{CONTACTCONTENTS.TITLE}</ContactTitleText>
      </ContactTitleContainer>
      <ContactContentContainer>
        <ContactInfoContainer>
          <ContactInfoItemContainer>
            <ContactInfoIconContainer>
              <ContactInfoIcons icon={faLocationDot} />
            </ContactInfoIconContainer>
            <ContactInfoText>{CONTACTCONTENTS.CONTACTADDRESS}</ContactInfoText>
          </ContactInfoItemContainer>
          <ContactInfoItemContainer>
            <ContactInfoIconContainer>
              <ContactInfoIcons icon={faPhone} />
            </ContactInfoIconContainer>
            <ContactInfoText>{CONTACTCONTENTS.CONTACTPHONE}</ContactInfoText>
          </ContactInfoItemContainer>
          <ContactInfoItemContainer>
            <ContactInfoIcons icon={faEnvelope} />
            <ContactInfoText>
              <ContactMailtoLink href="mailto:sales@besselco.com">
                {CONTACTCONTENTS.CONTACTEMAIL}
              </ContactMailtoLink>
            </ContactInfoText>
          </ContactInfoItemContainer>
          {/* <ContactInfoItemContainer style={{ height: "40px" }}>
            <ContactInfoIcons icon={faThumbsUp} />
            <SocialIconsLink href="">
              <SocialIcons
                icon={faSquareFacebook}
                style={{ color: "#3B5998" }}
              />
            </SocialIconsLink>
            <SocialIconsLink>
              <SocialIcons
                icon={faSquareTwitter}
                style={{ color: "#1DA1F2" }}
              />
            </SocialIconsLink>
            <SocialIconsLink>
              <SocialIcons icon={faLinkedin} style={{ color: "#0A66C2" }} />
            </SocialIconsLink>
            <SocialIconsLink>
              <SocialIcons
                icon={faSquareInstagram}
                style={{ color: "#E1306C" }}
              />
            </SocialIconsLink>
          </ContactInfoItemContainer> */}
        </ContactInfoContainer>

        <ContactFormContainer>
          <ContactForm viewport={viewport} />
        </ContactFormContainer>
      </ContactContentContainer>
    </ContactContainer>
  );
};

export default Contact;
