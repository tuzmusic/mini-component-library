import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const S = {
  Wrapper: styled.div`
    width: min-content;
  `,
  Select: styled.select`
    width: ${p => p.width}px;
    font-size: 16px;
    line-height: 18.76px;
    padding: 12px 16px;

    background: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    border-radius: 8px;
    transition: color 1s;

    &:hover {
      color: black;
    }
  `,
  WidthWrapper: styled.div`
  `,
}

const WidthSelect = styled(S.Select)``

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const widthRef = useRef()
  const width = widthRef.current && widthRef.current.clientWidth

  return (
    <S.Wrapper>
      <S.Select value={value} onChange={onChange} width={width}>
        {children}
      </S.Select>
      <S.WidthWrapper>
        <WidthSelect value={value} onChange={onChange} ref={widthRef}>
          <option value={value}>{displayedValue}</option>
        </WidthSelect>
      </S.WidthWrapper>
    </S.Wrapper>
  );
};

export default Select;
