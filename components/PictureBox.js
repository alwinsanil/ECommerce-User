/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { BiChevronLeft, BiChevronLeftCircle, BiChevronRight, BiChevronRightCircle } from "react-icons/bi";
import styled from "styled-components";
import css from "styled-jsx/css";

const MainImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-bottom: 20px;
  img {
    min-width: 70%;
    max-width: 70%;
    max-height: 300px;
  }
`;
const Arrow = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${(props) =>
    props.left &&
    css`
      transform: translateX(35px);
    `}
  ${(props) =>
    props.right &&
    css`
      transform: translateX(-35px);
    `}
`;
const SmallImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 5px;
  img {
    max-width: 50px;
    max-height: 50px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const PictureBox = ({ images }) => {
    const [index, setIndex] = useState(0);
    const handleNext = () => {
      setIndex((index + 1) % images.length);
    };
    const handlePrev = () => {
      setIndex(
        (index - 1 + images.length) % images.length
      );
    };
  return (
    <>
      <MainImage>
        <Arrow onClick={handlePrev}>
          <BiChevronLeft size="3.5rem" />
        </Arrow>
        <img src={images?.[index]} alt="" />
        <Arrow onClick={handleNext}>
          <BiChevronRight size="3.5rem" />
        </Arrow>
      </MainImage>
      <SmallImage>
        {images?.map((img) => (
          <img key={img} src={img} alt="" />
        ))}
      </SmallImage>
    </>
  );
};

export default PictureBox;
