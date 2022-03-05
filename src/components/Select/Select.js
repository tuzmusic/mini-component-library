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
    position: absolute;
    opacity: 0;
    //visibility: hidden;
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
        <S.Select value={value} onChange={onChange}>
          {children}
        </S.Select>
        <p>{displayedValue}</p>
        <S.Chevron/>
      </S.FakeSelect>
    </S.Wrapper>
  );
};

export default Select;
