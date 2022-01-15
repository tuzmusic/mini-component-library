/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

const heights = {small: 8, medium: 16, large: 24}

const S = {
  Wrapper: styled.div`
    display: flex;
    width: 482px;
    justify-content: space-between;
    align-items: center;
  `,
  OuterBar: styled.div`
    height: ${p => heights[p.size]}px;
    padding: ${p => p.size === "large" && "4px"};
    background: ${COLORS.transparentGray15};
    width: 370px;
    left: 623px;
    top: 170px;
    border-radius: ${p => p.size === "large" ? 8 : 4}px;
    overflow: hidden;
  `,
  InnerBar: styled.div`
    background: ${COLORS.primary};
    width: ${p => p.value}%;
    height: 100%;
    // TODO: it actually *approaches* 4 between, say, 98-100%
    border-radius: 4px ${p => p.value < 100 ? "0 0" : "4px 4px" } 4px;
  `,
  Value: styled.p`
    &::after {
      content: "%";
    }
  `,
}
const {InnerBar, OuterBar, Value, Wrapper} = S
const ProgressBar = ({value, size}) => {
  return <Wrapper>
    {/*<Value>{value}</Value>*/}

    <OuterBar size={size}>
      <InnerBar value={value}/>
    </OuterBar>
  </Wrapper>
};

export default ProgressBar;
