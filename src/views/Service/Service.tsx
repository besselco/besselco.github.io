import React from "react";
import {
  ServiceContainer,
  ServiceHeaderContainer,
  ServiceHeaderTitle,
  ServiceHeaderDescription,
  ServiceItemsContainer,
  ServiceItemContainer,
  ServiceIconContainer,
  ServiceIcon,
  ServiceItemTitle,
  ServiceItemDescription,
} from "./Service.style";
import { SERVICECONTENTS } from "constants/StringConstants";
import { useInView } from "react-intersection-observer";
import Marketing from "assets/images/marketing.png";
import Warehouse from "assets/images/warehouse.png";
import Ecommerce from "assets/images/ecommerce.png";
import Brand from "assets/images/brand-awareness.png";

const Service = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <ServiceContainer id="service">
      <ServiceHeaderContainer
        ref={ref}
        className={`${inView ? "mountAnimation" : ""}`}
      >
        <ServiceHeaderTitle>{SERVICECONTENTS.TITLE}</ServiceHeaderTitle>
        <ServiceHeaderDescription>
          {SERVICECONTENTS.SUBTITLE}
        </ServiceHeaderDescription>
      </ServiceHeaderContainer>

      <ServiceItemsContainer
        ref={ref}
        className={`${inView ? "mountAnimation" : ""}`}
      >
        <ServiceItemContainer>
          <ServiceIconContainer>
            <ServiceIcon src={Warehouse} />
          </ServiceIconContainer>
          <ServiceItemTitle>
            {SERVICECONTENTS.DISTRIBUTION_TITLE}
          </ServiceItemTitle>
          <ServiceItemDescription>
            {SERVICECONTENTS.DISTRIBUTION_DESC}
          </ServiceItemDescription>
        </ServiceItemContainer>

        <ServiceItemContainer>
          <ServiceIconContainer>
            <ServiceIcon src={Ecommerce} />
          </ServiceIconContainer>
          <ServiceItemTitle>{SERVICECONTENTS.ECOMMERCE_TITLE}</ServiceItemTitle>
          <ServiceItemDescription>
            {SERVICECONTENTS.ECOMMERCE_DESC}
          </ServiceItemDescription>
        </ServiceItemContainer>

        <ServiceItemContainer>
          <ServiceIconContainer>
            <ServiceIcon src={Brand} />
          </ServiceIconContainer>
          <ServiceItemTitle>{SERVICECONTENTS.EXPANSION_TITLE}</ServiceItemTitle>
          <ServiceItemDescription>
            {SERVICECONTENTS.EXPANSION_DESC}
          </ServiceItemDescription>
        </ServiceItemContainer>

        <ServiceItemContainer>
          <ServiceIconContainer>
            <ServiceIcon src={Marketing} />
          </ServiceIconContainer>
          <ServiceItemTitle>{SERVICECONTENTS.MARKETING_TITLE}</ServiceItemTitle>
          <ServiceItemDescription>
            {SERVICECONTENTS.MARKETING_DESC}
          </ServiceItemDescription>
        </ServiceItemContainer>
      </ServiceItemsContainer>
    </ServiceContainer>
  );
};

export default Service;
