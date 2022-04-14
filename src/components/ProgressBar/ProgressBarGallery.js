import React from "react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProgressBarGallery = ({value}) => {
  return <Wrapper>
    <ProgressBar value={value} size={"large"}/>
    <ProgressBar value={value} size={"medium"}/>
    <ProgressBar value={value} size={"small"} style={{width: 100}}/>
  </Wrapper>
};

export default ProgressBarGallery;
