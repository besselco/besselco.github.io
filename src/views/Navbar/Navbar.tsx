import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarLogoContainer,
  NavbarLogo,
  NavbarContentContainer,
  NavbarLogoLink,
} from "./Navbar.style";
import Logo from "assets/images/BesselCo-Logo.png";
import NavbarItemList from "./NavbarItemsList";

const Navbar = () => {
  const [viewport, setViewport] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );
  window.addEventListener("resize", () => {
    setViewport(window.innerWidth || document.documentElement.clientWidth);
  });

  return (
    <NavbarContainer>
      <NavbarLogoContainer>
        <NavbarLogoLink href="https://www.besselco.com">
          <NavbarLogo src={Logo} />
        </NavbarLogoLink>
      </NavbarLogoContainer>

      {viewport >= 768 && (
        <NavbarContentContainer>
          <NavbarItemList />
        </NavbarContentContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
