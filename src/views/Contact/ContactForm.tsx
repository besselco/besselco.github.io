import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactFormTemplate,
  ContactFormNameContainer,
  ContactFormLabelContainer,
  ContactFormLabel,
  ContactFormButton,
  ContactFormInput,
  ContactFormNameInput,
} from "./Contact.style";
import { CONTACTCONTENTS } from "constants/StringConstants";

const ContactForm = ({ viewport }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <ContactFormTemplate id="contact_form" onSubmit={sendEmail}>
      {viewport >= 768 ? (
        <ContactFormNameContainer>
          <ContactFormLabelContainer style={{ maxWidth: "190px" }}>
            <ContactFormLabel htmlFor="fname">
              {CONTACTCONTENTS.CONTACTFORMFNAME}
            </ContactFormLabel>
            <ContactFormNameInput type="text" id="fname" name="fname" />
          </ContactFormLabelContainer>
          <ContactFormLabelContainer style={{ maxWidth: "190px" }}>
            <ContactFormLabel htmlFor="lname">
              {CONTACTCONTENTS.CONTACTFORMLNAME}
            </ContactFormLabel>
            <ContactFormNameInput type="text" id="lname" name="lname" />
          </ContactFormLabelContainer>
        </ContactFormNameContainer>
      ) : (
        <>
          <ContactFormLabelContainer>
            <ContactFormLabel htmlFor="fname">
              {CONTACTCONTENTS.CONTACTFORMFNAME}
            </ContactFormLabel>
            <ContactFormNameInput type="text" id="fname" name="fname" />
          </ContactFormLabelContainer>
          <ContactFormLabelContainer>
            <ContactFormLabel htmlFor="lname">
              {CONTACTCONTENTS.CONTACTFORMLNAME}
            </ContactFormLabel>
            <ContactFormNameInput type="text" id="lname" name="lname" />
          </ContactFormLabelContainer>
        </>
      )}

      <ContactFormLabelContainer>
        <ContactFormLabel htmlFor="email">
          {CONTACTCONTENTS.CONTACTFORMEMAIL}
        </ContactFormLabel>
        <ContactFormInput type="email" id="email" name="email" required />
      </ContactFormLabelContainer>
      <ContactFormLabelContainer>
        <ContactFormLabel htmlFor="message">
          {CONTACTCONTENTS.CONTACTFORMMESSAGE}
        </ContactFormLabel>
        <ContactFormInput
          type="text"
          id="message"
          name="message"
          style={{ paddingBottom: "50px" }}
          required
        />
      </ContactFormLabelContainer>
      <ContactFormButton type="submit" disabled={isSubmitting}>
        {CONTACTCONTENTS.CONTACTFORMSUBMIT}
      </ContactFormButton>
      {stateMessage && <p>{stateMessage}</p>}
    </ContactFormTemplate>
  );
};

export default ContactForm;
