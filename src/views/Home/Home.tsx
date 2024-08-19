import React from "react";
import {
  HomeContainer,
  HomeContentContainer,
  HomeHeaderContainer,
  HomeHeaderText,
  HomeDescriptionContainer,
  HomeDescriptionText,
  HomeLinkContainer,
  HomeLinkText,
} from "./Home.style";
import { HOMECONTENTS } from "constants/StringConstants";

const Home = () => {
  return (
    <HomeContainer id="home">
      <HomeContentContainer>
        <HomeHeaderContainer>
          <HomeHeaderText>{HOMECONTENTS.HEADERTEXT}</HomeHeaderText>
        </HomeHeaderContainer>
        <HomeDescriptionContainer>
          <HomeDescriptionText>{HOMECONTENTS.DESCTEXT}</HomeDescriptionText>
        </HomeDescriptionContainer>
        <HomeLinkContainer>
          <HomeLinkText activeClass="active" smooth spy to="logo">
            {HOMECONTENTS.LINKTEXT}
          </HomeLinkText>
        </HomeLinkContainer>
      </HomeContentContainer>
    </HomeContainer>
  );
};

export default Home;
