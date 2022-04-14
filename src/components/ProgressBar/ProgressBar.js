/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const heights = { small: 8, medium: 16, large: 24 }

function getRightCornersRadius(value, maxRadius = 4, maxVal = 100) {
  const minVal = maxVal - maxRadius
  const radius = (value < minVal) ? 0 : Math.abs(maxVal - value - maxRadius);
  return `${maxRadius}px ${radius}px ${radius}px ${maxRadius}px`
}

const S = {
  OuterBar: styled.div`
    height: ${p => heights[p.size]}px;
    padding: ${p => p.size === "large" && "4px"};
    background: ${COLORS.transparentGray15};
    width: 370px;
    left: 623px;
    top: 170px;
    border-radius: ${p => p.size === "large" ? 8 : 4}px;
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    overflow: hidden;
  `,
  InnerBar: styled.div`
    background: ${COLORS.primary};
    width: ${p => Math.min(p.value, 100)}%;
    height: 100%;
    border-radius: ${p => getRightCornersRadius(p.value)};
  `,
}

const { InnerBar, OuterBar } = S

const ProgressBar = ({ value, size }) => {
  const ariaProps = {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }
  return <OuterBar size={size} {...ariaProps}>
    <InnerBar value={value}/>
  </OuterBar>
};

export default ProgressBar;
