import {
  StyledInfo,
  Circles,
  ImageCircle,
  StyledCircle,
  StyledLeftInfoArrow,
  StyledRightInfoArrow,
} from "./styled";
import Content from "./Content";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Info = ({ title, description, image, location, leftdirection, buttonText }) => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  return (
    <StyledInfo leftdirection={leftdirection} ref={elementRef}>
      <Content
        title={title}
        description={description}
        location={location}
        leftdirection={leftdirection}
        isInView={isInView}
        buttonText={buttonText}
      />
      <Circles leftdirection={leftdirection} isInView={isInView}>
        <ImageCircle src={image} alt="" />
        <StyledCircle />
        <StyledLeftInfoArrow leftdirection={leftdirection} />
        <StyledRightInfoArrow leftdirection={leftdirection} />
      </Circles>
    </StyledInfo>
  );

};

export default Info;
