import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  ScrollButton,
  ScrollIcon,
  ScrollButtonContainer,
} from "./ScrollTop.style";

const ScrollTop = (props) => {
  return (
    <>
      <ScrollButtonContainer
        showGoTop={props.showGoTop}
        onClick={props.scrollUp}
      >
        <ScrollButton showGoTop={props.showGoTop} className="goTop">
          <ScrollIcon icon={faAngleUp} />
        </ScrollButton>
      </ScrollButtonContainer>
    </>
  );
};

export default ScrollTop;
