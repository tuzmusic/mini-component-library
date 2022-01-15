/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const S = {
  Wrapper: styled.div`
    display: flex;
    width: 482px;
    justify-content: space-between;
    align-items: center;
  `,
  OuterBar: styled.div`
    background: ${COLORS.transparentGray15};
    height: 24px;
    width: 370px;
    left: 623px;
    top: 170px;
    border-radius: 8px;
  `,
  InnerBar: styled.div`
    background: ${COLORS.primary};
    width: ${p => p.value}%;
    height: 100%;
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
    <Value>{value}</Value>

    <OuterBar  size={size}>
      <InnerBar value={value}/>
    </OuterBar>
  </Wrapper>
};

export default ProgressBar;
