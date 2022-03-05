import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const S = {
  Wrapper: styled.div`
    width: min-content;
    position: relative;
  `,
  Select: styled.select`
    position: absolute;
    opacity: 0;
    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
  FakeSelect: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    user-select: none;

    white-space: nowrap;
    width: min-content;

    font-size: 16px;
    line-height: 18.76px;
    padding: 12px 16px;

    background: ${COLORS.transparentGray15};
    border-radius: 8px;

    color: ${COLORS.gray700};
    transition: color 1s;

    :hover {
      color: black;
    }

    :focus-within {
      outline: solid medium Highlight;
    }
  `,
  Chevron: styled(Icon).attrs({ id: "chevron-down" })`
    color: currentColor;
  `,
}

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <S.Wrapper>
      <S.FakeSelect>
        <p>{displayedValue}</p>
        <S.Chevron/>
        <S.Select value={value} onChange={onChange}>
          {children}
        </S.Select>
      </S.FakeSelect>
    </S.Wrapper>
  );
};

export default Select;
