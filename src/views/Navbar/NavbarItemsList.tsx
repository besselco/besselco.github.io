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
          <Link activeClass="active" smooth spy to={item.route}>
            <NavbarItem key={item.name}>{item.name}</NavbarItem>
          </Link>
        ))}
      </NavbarItemsContainer>
    </NavbarItemsList>
  );
};

export default NavbarItemList;
