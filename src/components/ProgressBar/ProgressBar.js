/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const heights = { small: 8, medium: 12, large: 24 }

const S = {
  OuterBar: styled.div`
    height: ${p => heights[p.size]}px;
    padding: ${p => p.size === "large" && "4px"};
    background: ${COLORS.transparentGray15};
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    // josh's video sets this at the end, but I noticed they were different in the figma! Ha! 
    border-radius: ${p => p.size === "large" ? 8 : 4}px;
  `,
  RoundingWrapper: styled.div`
    overflow: hidden;
    border-radius: ${p => p.size === "large" ? 8 : 4}px;
    width: 100%;
    height: 100%;
  `,
  InnerBar: styled.div`
    background: ${COLORS.primary};
    width: ${p => Math.min(p.value, 100)}%;
    height: 100%;
    border-radius: 4px 0 0 4px;
  `,
}


const ProgressBar = ({ value, size, ...props }) => {
  const ariaProps = {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }
  return <S.OuterBar size={size} {...ariaProps} {...props}>
    <S.RoundingWrapper value={value}>
      <S.InnerBar value={value}/>
    </S.RoundingWrapper>
  </S.OuterBar>
};

export default ProgressBar;
