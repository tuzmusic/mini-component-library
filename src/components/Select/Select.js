import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const S = {
  Wrapper: styled.div`
  `,
  Select: styled.select`
    font-size: 16px;
    line-height: 18.76px;
    padding: 12px 16px;

    background: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    border-radius: 8px;
  `,
}

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <S.Wrapper>
      <S.Select value={value} onChange={onChange}>
        {children}
      </S.Select>
    </S.Wrapper>
  );
};

export default Select;
