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

  const option = children.find(({ props }) => props?.value === value)
  const name = option.props.children

  const widthRef = useRef()
  const _width = widthRef.current && widthRef.current.clientWidth
  // const _width = widthRef.current && getComputedStyle(widthRef.current).width

  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(_width)
  }, [_width])

  console.log(width)
  // debugger

  return (
    <S.Wrapper>
      {width && <S.Select value={value} onChange={onChange} width={width}>
        {children}
      </S.Select>}
      <S.WidthWrapper>
        <WidthSelect value={value} onChange={onChange} ref={widthRef}>
          <option value={value}>{name}</option>
        </WidthSelect>
      </S.WidthWrapper>
    </S.Wrapper>
  );
};

export default Select;
