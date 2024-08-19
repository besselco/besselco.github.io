import React from "react";
import {
  NavbarItemsList,
  NavbarItemsContainer,
  NavbarItem,
} from "./NavbarItemsList.style";
import { navbar as NavbarConstants, INavItem } from "constants/NavbarConstants";
import { Link } from "react-scroll";

const NavbarItemList = () => {
  return (
    <NavbarItemsList>
      <NavbarItemsContainer>
        {NavbarConstants.navItem.map((item: INavItem) => (
          <NavbarItem key={item.name}>
            <Link activeClass="active" smooth spy to={item.route}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarItemsContainer>
    </NavbarItemsList>
  );
};

export default NavbarItemList;
