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

const Info = ({ title, description, image, location, leftDirection }) => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  return (
    <StyledInfo leftDirection={leftDirection} ref={elementRef}>
      <Content
        title={title}
        description={description}
        location={location}
        leftDirection={leftDirection}
        isInView={isInView}
      />
      <Circles leftDirection={leftDirection} isInView={isInView}>
        <ImageCircle src={image} alt="" />
        <StyledCircle />
        <StyledLeftInfoArrow leftDirection={leftDirection} />
        <StyledRightInfoArrow leftDirection={leftDirection} />
      </Circles>
    </StyledInfo>
  );

};

export default Info;
